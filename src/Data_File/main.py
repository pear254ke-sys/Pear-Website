import os
from PIL import Image

def convert_png_to_webp(folder_path):
    # Check if the folder exists
    if not os.path.exists(folder_path):
        print(f"Error: The folder '{folder_path}' does not exist.")
        return

    # Iterate through all files in the directory
    for filename in os.listdir(folder_path):
        if filename.lower().endswith(".png"):
            png_path = os.path.join(folder_path, filename)
            # Create new filename by swapping .png for .webp
            webp_path = os.path.join(folder_path, os.path.splitext(filename)[0] + ".webp")

            try:
                # Open the PNG image
                with Image.open(png_path) as img:
                    # Save as WebP (default quality is 80; change with quality=95 if needed)
                    img.save(webp_path, "webp")
                
                # Delete the original PNG file after successful conversion
                os.remove(png_path)
                print(f"Converted and replaced: {filename} -> {os.path.basename(webp_path)}")
                
            except Exception as e:
                print(f"Failed to convert {filename}: {e}")


target_folder = '../assets' 
convert_png_to_webp(target_folder)


def compress_webp_in_place(folder_path, quality=70):
    """
    Compresses WebP images and overwrites the original files.
    """
    for filename in os.listdir(folder_path):
        if filename.lower().endswith(".webp"):
            file_path = os.path.join(folder_path, filename)
            
            try:
                with Image.open(file_path) as img:
                    # method=6 ensures the smallest file size possible at that quality
                    img.save(file_path, "WEBP", quality=quality, method=6)
                print(f"Compressed and updated: {filename}")
            except Exception as e:
                print(f"Failed to process {filename}: {e}")
  
compress_webp_in_place(target_folder)
