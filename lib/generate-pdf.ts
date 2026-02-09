
import html2canvas from "html2canvas";
import jsPDF from "jspdf";

/**
 * Generates a PDF from a list of HTML elements.
 * Targeted for the Proposal Book layout.
 */
export async function generatePdf(elementIds: string[], fileName: string = "ghipps-proposal.pdf") {
    const pdf = new jsPDF({
        orientation: "landscape",
        unit: "px",
        format: "a4" // Initial format, will change per page
    });

    // Iterate through each page element
    for (let i = 0; i < elementIds.length; i++) {
        const element = document.getElementById(elementIds[i]);
        if (!element) continue;

        // Skip adding a page for the first item (jsPDF starts with one)
        if (i > 0) {
            pdf.addPage();
        }

        try {
            // Capture the DOM element as a canvas
            // scale: 2 improves resolution for text
            const canvas = await html2canvas(element, {
                scale: 2,
                useCORS: true,
                logging: false,
                backgroundColor: "#ffffff", // Ensure white background
                windowWidth: 1400, // Force a desktop-like width for consistency
                onclone: (clonedDoc) => {
                    const html = clonedDoc.documentElement;
                    const body = clonedDoc.body;

                    // 1. Force Light Mode Class/Styles
                    html.classList.remove("dark");
                    body.classList.remove("dark");
                    html.style.colorScheme = "light";

                    // 2. Force CSS Variables to Light Mode
                    body.style.setProperty("--background", "#ffffff");
                    body.style.setProperty("--foreground", "#171717");
                    body.style.backgroundColor = "#ffffff";
                    body.style.color = "#171717";

                    // 3. AGGRESSIVE: Force visibility of all motion elements
                    // This targets Framer Motion elements that might be stuck at opacity 0
                    const allElements = clonedDoc.getElementsByTagName("*");
                    for (let i = 0; i < allElements.length; i++) {
                        const el = allElements[i] as HTMLElement;
                        const style = el.getAttribute("style") || "";

                        // If it has opacity: 0 or is a motion element, force it visible
                        if (style.includes("opacity: 0") || el.hasAttribute("data-framer-component") || el.className.includes("motion")) {
                            el.style.setProperty("opacity", "1", "important");
                            el.style.setProperty("transform", "none", "important");
                            el.style.setProperty("visibility", "visible", "important");
                        }

                        // Force background colors on specific sections
                        if (el.className.includes("bg-zinc-950") || el.className.includes("bg-black")) {
                            el.style.setProperty("background-color", "#ffffff", "important");
                            el.style.setProperty("color", "#171717", "important");
                        }
                    }

                    // 4. Force container size
                    const container = clonedDoc.querySelector(".print-container") as HTMLElement;
                    if (container) {
                        container.style.width = "1400px";
                        container.style.backgroundColor = "white";
                    }
                }
            });

            const imgData = canvas.toDataURL("image/jpeg", 0.95);

            // Get dimensions
            const imgWidth = canvas.width;
            const imgHeight = canvas.height;

            // Set PDF page size to match the captured image aspect ratio
            // This ensures the custom layout (which is 100vh) fits perfectly
            pdf.setPage(i + 1);
            pdf.internal.pageSize.width = imgWidth * 0.75; // px to pt conversion (rough)
            pdf.internal.pageSize.height = imgHeight * 0.75;

            // Add image to full page
            pdf.addImage(imgData, "JPEG", 0, 0, imgWidth * 0.75, imgHeight * 0.75);

        } catch (error) {
            console.error(`Error generating PDF page ${i}:`, error);
        }
    }

    // Download the PDF
    pdf.save(fileName);
}
