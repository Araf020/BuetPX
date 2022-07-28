import cv2
 
# read image
# img = cv2.imread('pic9.jpg', cv2.IMREAD_UNCHANGED)
img = cv2.imread('pic12.jpg', cv2.IMREAD_UNCHANGED) 
# get dimensions of image
dimensions = img.shape
 
# height, width, number of channels in image
height = img.shape[0]
width = img.shape[1]
channels = img.shape[2]

# channels = RGB erokom  koyta 
 
print('Image Dimension    : ',dimensions)
print('Image Height       : ',height)
print('Image Width        : ',width)
print('Number of Channels : ',channels)