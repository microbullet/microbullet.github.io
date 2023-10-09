from PIL import Image
import os

# Function to scale up an image by a factor of 10
def scale_image(image_path, output_path):
    try:
        img = Image.open(image_path)
        width, height = img.size
        new_width = width * 10
        new_height = height * 10
        scaled_img = img.resize((new_width, new_height), Image.NEAREST)
        scaled_img.save(output_path)
        print(f"Scaled {image_path} to {output_path}")
    except Exception as e:
        print(f"Error processing {image_path}: {str(e)}")

# Directory containing the original images
input_folder = 'C:/Users/Phoenix/Desktop/Programming/SGK/microbullet.github.io/docs/only_small'

# Directory where scaled images will be saved
output_folder = 'C:/Users/Phoenix/Desktop/Programming/SGK/microbullet.github.io/docs/scaled_cards'

# Ensure the output directory exists
if not os.path.exists(output_folder):
    os.makedirs(output_folder)

# List all files in the input directory
file_list = os.listdir(input_folder)

# Filter files to include only image files (you can customize this)
image_extensions = ('.jpg', '.jpeg', '.png', '.gif', '.bmp')
image_files = [f for f in file_list if f.lower().endswith(image_extensions)]

# Scale and save each image
for image_file in image_files:
    input_path = os.path.join(input_folder, image_file)
    output_path = os.path.join(output_folder, image_file)
    scale_image(input_path, output_path)