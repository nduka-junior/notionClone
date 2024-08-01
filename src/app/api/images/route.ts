
import { NextResponse } from "next/server";
import fs from "fs";
import path from "path";

export async function GET() {
  const directoryPath = path.join(process.cwd(), "public/logos"); // Adjust the path if needed

  try {
    const files = fs.readdirSync(directoryPath);

    // Filter out directories and only include image files
    const imageFiles = files.filter((file) => {
      const filePath = path.join(directoryPath, file);
      return (
        fs.statSync(filePath).isFile() && /\.(jpe?g|png|gif|svg)$/i.test(file)
      );
    });

    return NextResponse.json({ images: imageFiles });
  } catch (err) {
    // Assert `err` as an `Error` object
    const errorMessage = (err as Error).message || "Unknown error occurred";
    return NextResponse.json(
      { error: "Unable to scan directory: " + errorMessage },
      { status: 500 }
    );
  }
}
