from PIL import Image
import PIL
import glob
import os

fixed_height = 116

for i in range(108):
    i += 1
    if i > 54:
        i += 5
    image = Image.open(f'microbullet.github.io/docs/images/card_{i}.png')
    height_percent = (fixed_height / float(image.size[1]))
    width_size = int((float(image.size[0]) * float(height_percent)))
    image = image.resize((width_size, fixed_height), PIL.Image.NEAREST)
    image.save(f'microbullet.github.io/docs/images/card_{i}_big.png')