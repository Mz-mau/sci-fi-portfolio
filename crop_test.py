from PIL import Image

# Open the mobile template
img = Image.open('public/template_salon_mobile.png')
width, height = img.size

# Calculate middle third (assuming 3 equal columns with small gaps)
# Let's crop from 32% to 68% of the width
left = int(width * 0.33)
right = int(width * 0.67)
top = 0
bottom = height

cropped = img.crop((left, top, right, bottom))
cropped.save('public/template_salon_mobile_cropped.png')
print("Cropped successfully to width:", right-left)
