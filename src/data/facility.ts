export interface FacilityImage {
  /** file name inside public/facility/, e.g. "Picture1.jpg" */
  file: string;
  title: string;
  description?: string;
}

/**
 * Add your photos here:
 *  1. copy the image into  public/facility/
 *  2. add one entry below (file + title, optional description)
 */
export const facilityImages: FacilityImage[] = [
  // Outside the facility
  { file: "Picture16.jpg", title: "Our Manufacturing Plant", description: "Plant building and surrounding campus" },
  { file: "Picture17.jpg", title: "Company Entrance", description: "PIGHALITADHATU signboard at the plant gate" },
  { file: "Picture14.png", title: "Plant Front View", description: "Main entrance and office block" },
  { file: "Picture18.jpg", title: "Plant Side View", description: "Factory building and open yard" },

  // Inside the facility
  { file: "Picture13.png", title: "Production Hall", description: "Spacious shop floor with machining area" },
  { file: "Picture12.png", title: "Workshop Interior", description: "Machining section and work benches" },
  { file: "Picture2.png", title: "Production Area Overview", description: "Wide view of our workshop and equipment" },
  { file: "Picture1.png", title: "Die Shop Floor", description: "Dies and control unit on the foundry floor" },
  { file: "Picture9.png", title: "Workstation Area", description: "Assembly and pattern work benches" },
  { file: "Picture10.png", title: "Equipment Section", description: "Process equipment and control cabinet" },

  // Machines and equipment
  { file: "Picture3.png", title: "Milling Machine", description: "Precision machining of die and tooling parts" },
  { file: "Picture4.png", title: "Vertical Milling Machine", description: "In-house machining capability" },
  { file: "Picture7.png", title: "Lathe Machine", description: "Turning and finishing operations" },
  { file: "Picture5.png", title: "Furnace", description: "Heating and melting section" },
  { file: "Picture6.png", title: "Autoclave", description: "Front-loading pressure chamber with support unit" },
  { file: "Picture8.png", title: "Shot Blasting Machine", description: "Surface cleaning and finishing of castings" },
  { file: "Picture11.png", title: "Spectrometer", description: "Material analysis and quality testing" },
];