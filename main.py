def leds():
    global temp, all_parts
    for index in range(2):
        strip.show_rainbow(1, 360)
    basic.pause(300)
    strip.clear()
    strip.show()
    basic.pause(300)
    index2 = 0
    while index2 <= num_pixels:
        temp = heart[index2]
        all_parts = neopixel.colors(temp)
        basic.show_number(red_part)
        strip.set_pixel_color(index2, temp)
        index2 += 1
    strip.show()
    basic.pause(5000)
    strip.clear()
    strip.show()
red_part = 0
temp = 0
char_code = 0
i = 0
heart: List[number] = []
strip: neopixel.Strip = None
num_pixels = 0
num_pixels = 64
strip = neopixel.create(DigitalPin.P0, num_pixels, NeoPixelMode.RGB)
strip.set_brightness(25)
# a range of colours
w = neopixel.rgb(255, 255, 255)
b = neopixel.rgb(0, 0, 0)
gr = neopixel.rgb(180, 180, 180)
# grey
dgr = neopixel.rgb(100, 100, 100)
r = neopixel.rgb(255, 0, 0)
o = neopixel.rgb(200, 100, 0)
y = neopixel.rgb(255, 255, 0)
g = neopixel.rgb(0, 255, 0)
lg = neopixel.rgb(180, 255, 0)
dg = neopixel.rgb(0, 60, 0)
lbl = neopixel.rgb(50, 180, 255)
bl = neopixel.rgb(0, 100, 150)
ind = neopixel.rgb(120, 120, 255)
br = neopixel.rgb(160, 110, 10)
# brown
p = neopixel.rgb(255, 100, 255)
# pink
# neopixel.rgb(255, 255, 255)
# a range of images
heart = [b,
    b,
    b,
    b,
    b,
    b,
    b,
    b,
    b,
    r,
    r,
    b,
    r,
    r,
    b,
    b,
    r,
    y,
    o,
    r,
    r,
    r,
    r,
    b,
    r,
    o,
    r,
    r,
    r,
    o,
    r,
    b,
    b,
    r,
    r,
    r,
    o,
    r,
    b,
    b,
    b,
    b,
    r,
    r,
    r,
    b,
    b,
    b,
    b,
    b,
    b,
    r,
    b,
    b,
    b,
    b,
    b,
    b,
    b,
    b,
    b,
    b,
    b,
    b]
my_str = "Hi"
basic.show_number(len(my_str))
basic.pause(300)
alphabet = "abcdefghijklmnopqrstuvwxyz"
alphabet2 = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
while i <= len(my_str) - 1:
    basic.show_string("" + (my_str[i]))
    basic.pause(100)
    j = 0
    while j <= len(alphabet) - 1:
        if my_str[i] == alphabet[j] or my_str[i] == alphabet2[j]:
            char_code = j + 1
            basic.show_number(char_code)
            basic.pause(100)
        j += 1
    i += 1
leds()