import sys
try:
    from PIL import Image
except ImportError:
    import subprocess
    subprocess.check_call([sys.executable, "-m", "pip", "install", "pillow"])
    from PIL import Image

def remove_white_bg(input_path, output_path, tolerance=220):
    img = Image.open(input_path).convert("RGBA")
    datas = img.getdata()
    newData = []
    
    for item in datas:
        # Check if the pixel is close to white (R, G, B > tolerance)
        if item[0] > tolerance and item[1] > tolerance and item[2] > tolerance:
            newData.append((255, 255, 255, 0)) # fully transparent
        else:
            newData.append(item)
            
    img.putdata(newData)
    img.save(output_path, "PNG")
    print(f"Processed {input_path} -> {output_path}")

if __name__ == "__main__":
    if len(sys.argv) != 3:
        print("Usage: python remove_bg.py <input.png> <output.png>")
        sys.exit(1)
        
    remove_white_bg(sys.argv[1], sys.argv[2])
