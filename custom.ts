
/**
* Use this file to define custom functions and blocks.
* Read more at https://makecode.microbit.org/blocks/custom
*/

let num_pixels = 64;
let display = neopixel.create(DigitalPin.P0, num_pixels, NeoPixelMode.RGB)

// set up colours used in pre-defined images
let w = neopixel.rgb(255, 255, 255);    // white
let b = neopixel.rgb(0, 0, 0);          // black
let gr = neopixel.rgb(180, 180, 180);   // grey
let dgr = neopixel.rgb(100, 100, 100);  // dark grey
let r = neopixel.rgb(255, 0, 0);        // red
let o = neopixel.rgb(200, 100, 0);      // orange
let y = neopixel.rgb(255, 255, 0);      // yellow
let g = neopixel.rgb(0, 255, 0);        // green
let lg = neopixel.rgb(180, 255, 0);     // light green
let dg = neopixel.rgb(0, 60, 0);        // dark green
let lbl = neopixel.rgb(50, 180, 255);   // light blue
let bl = neopixel.rgb(0, 100, 150);     // blue
let ind = neopixel.rgb(120, 120, 255);  // indigo
let br = neopixel.rgb(160, 110, 10);    // brown
let p = neopixel.rgb(255, 100, 255);    // pink
let pu = neopixel.rgb(160, 32, 240);    // purple

// set up pre-defined images
let heart = [
    b, b, b, b, b, b, b, b,
    b, r, r, b, r, r, b, b,
    r, y, o, r, r, r, r, b,
    r, o, r, r, r, o, r, b,
    b, r, r, r, o, r, b, b,
    b, b, r, r, r, b, b, b,
    b, b, b, r, b, b, b, b,
    b, b, b, b, b, b, b, b];

let apple = [
    b, b, b, br, br, b, b, b,
    b, b, b, b, br, b, b, b,
    b, r, r, r, b, r, r, b,
    r, o, o, r, r, r, r, r,
    r, o, r, r, r, r, r, r,
    r, r, r, r, r, r, r, r,
    b, r, r, r, r, b, r, b,
    b, b, r, r, b, r, b, b];

let dinosaur = [
    b, g, g, g, g, b, b, b,
    g, b, g, b, g, b, b, b,
    g, g, g, g, g, b, b, b,
    b, b, dg, dg, g, b, b, b,
    b, g, lg, g, g, b, b, b,
    b, b, lg, lg, g, b, b, g,
    b, b, lg, lg, g, g, g, b,
    b, b, g, b, g, b, b, b];

let pacman = [
    b, b, y, y, y, y, dgr, b,
    b, y, y, y, y, y, y, dgr,
    y, y, y, y, y, dgr, b, b,
    y, y, y, y, dgr, b, b, b,
    y, y, y, y, dgr, b, b, b,
    y, y, y, y, y, dgr, b, b,
    b, y, y, y, y, y, y, dgr,
    b, b, y, y, y, y, dgr, b];

let ghost = [
    b, b, ind, ind, ind, bl, b, b,
    b, ind, ind, ind, bl, bl, lbl, b,
    b, ind, ind, bl, bl, bl, bl, lbl,
    ind, ind, b, b, bl, b, b, bl,
    ind, ind, b, lbl, bl, b, lbl, bl,
    ind, ind, ind, bl, b, bl, bl, bl,
    ind, ind, ind, bl, bl, bl, bl, bl,
    ind, ind, b, bl, bl, b, bl, bl];

let crown = [
    pu, b, b, pu, b, b, b, pu,
    bl, pu, b, bl, pu, b, bl, pu,
    bl, bl, bl, bl, bl, bl, bl, pu,
    bl, bl, bl, y, bl, bl, bl, pu,
    bl, y, bl, bl, bl, y, bl, pu,
    bl, bl, bl, bl, bl, bl, bl, pu,
    b, b, b, b, b, b, b, b,
    b, b, b, b, b, b, b, b];

let rainbow_vert = [
    r, o, y, g, lbl, bl, ind, b,
    r, o, y, g, lbl, bl, ind, b,
    r, o, y, g, lbl, bl, ind, b,
    r, o, y, g, lbl, bl, ind, b,
    r, o, y, g, lbl, bl, ind, b,
    r, o, y, g, lbl, bl, ind, b,
    r, o, y, g, lbl, bl, ind, b,
    r, o, y, g, lbl, bl, ind, b];

// set up arrays of images
let imagesArr = [heart,  apple,   dinosaur,   pacman,   ghost,   crown,    rainbow_vert];
let namesArr = ["heart", "apple", "dinosaur", "pacman", "ghost", "crown",   "rainbow"];
let currentIndex = 0;

// set up enumeration type (helpful as parameter to functions below)
enum Images {
    //% block="heart"
    Heart,
    //% block="apple"
    Apple,
    //% block="dinosaur"
    Dinosaur,
    //% block="pacman"
    Pacman,
    //% block="ghost"
    Ghost,
    //% block="crown"
    Crown,
    //% block="rainbow"
    Rainbow
}

// internal function to get array index from the enumeration type
function findIndex(img: Images): number {
    switch (img) {
        case Images.Heart: return 0;
        case Images.Apple: return 1;
        case Images.Dinosaur: return 2;
        case Images.Pacman: return 3;
        case Images.Ghost: return 4;
        case Images.Crown: return 5;
        case Images.Rainbow: return 6;
        default: return -1;
    }
}

// internal function to display an image by its index number on the Zip64 leds
function showImageIndex(imgIndex: number): void {
    let thisImg = imagesArr[imgIndex];
    for (let i = 0; i < num_pixels; i++) {
        display.setPixelColor(i, thisImg[i]);
    }
    display.show();
}

// internal function to return array with r,g,b components from the decimal colours
function getRGB(colour: number): number[] {
    let r = Math.floor(colour / 256 * 256);
    let g = Math.floor(colour / 256) % 256;
    let b = colour % 256;
    let rgb_array = [r, g, b];
    return rgb_array;
}


/**
 * Custom blocks for Cryptography - Steganography
 */

//% color="#B39EF3" weight=115
namespace cryptsteg {

    // ADJUST PIXEL
    /**
     * adjust Pixel for the given image, the specified pixel value is increased by the new rgb values
     * - note: need to call showImage afterwards
     * @param pixel the pixel to be changed
     * @param img the image to be changed
     * @param red the increment value for the red component
     * @param green the increment value for the green component
     * @param blue the increment value for the blue component
     */
    //% block="adjust pixel $pixel|$img|red $red|green $green|blue $blue"
    //% pixel.min=0 pixel.max=63 v.defl=0
    //% red.min=0 red.max=7 red.defl=0
    //% green.min=0 green.max=7 green.defl=0
    //% blue.min=0 blue.max=7 blue.defl=0
    //% inlineInputMode=inline
    export function adjustPixel(pixel: number, img: Images, red: number, green: number, blue: number): void {
        let imgIndex = findIndex(img);
        let colour = imagesArr[imgIndex][pixel];
        let rgb = getRGB(colour);
        
        let r = rgb[0] + red;
        if (r > 255) r = 255;         // ignore anything over 255
        let g = rgb[1] + green;
        if (g > 255) g = 255;         // ignore anything over 255
        let b = rgb[2] + blue;
        if (b > 255) b = 255;         // ignore anything over 255
        imagesArr[imgIndex][pixel] = neopixel.rgb(r, g, b);
    }

    // SHOW NEXT IMAGE
    /**
     * showNextImage displays the next of the pre-defined images on the Zip64 leds
     */
    //% block
    export function showNextImage(): void {
        currentIndex++;
        currentIndex = currentIndex % imagesArr.length;
        showImageIndex(currentIndex);
    }

    // SHOW IMAGE
    /**
     * showImage displays the selected image on the Zip64 leds
     * @param img the image to be displayed
     */
    //% block
    export function showImage(img: Images): void {
        currentIndex = findIndex(img);     // update currentIndex to this image
        showImageIndex(currentIndex);
    }

    // CLEAR DISPLAY
    /**
     * clearDisplay clears the image from the Zip64 leds
     */
    //% block
    export function clearDisplay(): void {
        display.clear();
        display.show();
    }

    // SET PIXEL
    /**
     * set the specified pixel to the rgb colour provided 
     */
    //% block="set pixel colour at $pixel| to red $red|green $green|blue $blue"
    //% pixel.min=0 pixel.max=63 v.defl=0
    //% red.min=0 red.max=255 red.defl=0
    //% green.min=0 green.max=255 green.defl=0
    //% blue.min=0 blue.max=255 blue.defl=0
    //% inlineInputMode=inline
    export function setPixelColour(pixel: number, red: number, green: number, blue: number): void {
        display.setPixelColor(pixel, neopixel.colors(neopixel.rgb(red, green, blue)))
        display.show()
    }

    // Advanced functions below here ...

    // WRITE PIXEL
    /**
     * writePixel for the given image, the specified pixel is overwritten with the new rgb values
    * - note: need to call showImage afterwards
    * @param pixel the pixel to be changed
     * @param img the image to be changed
     * @param red the new value for the red component
     * @param green the new value for the green component
     * @param blue the new value for the blue component
     */
    //% block="write pixel $pixel|$img|red $red|green $green|blue $blue"
    //% advanced=true
    //% pixel.min=0 pixel.max=63 v.defl=0
    //% red.min=0 red.max=255 red.defl=0
    //% green.min=0 green.max=255 green.defl=0
    //% blue.min=0 blue.max=255 blue.defl=0
    //% inlineInputMode=inline
    export function writePixel(pixel: number, img: Images, red: number, green: number, blue: number): void {
        let imgIndex = findIndex(img);
        imagesArr[imgIndex][pixel] = neopixel.rgb(red, green, blue);
    }

    // NUMBER OF IMAGES
    /**
     * numberOfImages displays the number of pre-defined images available
     * @returns a the number of images available
     */
    //% block
    //% advanced = true
    export function numberOfImages(): number {
        return (imagesArr.length);
    }

    // SHOW IMAGE NUM
    /**
     * showImageNum displays the image indexed by the selected number on the Zip64 leds
     * @param i the image number to be displayed
     */
    //% block
    //% advanced = true
    export function showImageNum(i: number): void {
        showImageIndex(i);
    }






    // REST OF FUNCTIONS UNUSED FOR NOW ...

    /**
     * Calcuate the character placings for each character in the supplied string.
     *   e.g. for the string "Hi", the function calculates the alphabetical position of H 
     *   (which is 8th in the alphabet), then i (which is 9th). The string is returned with each character
     *   position separated by a dot, e.g. "8.9."
     *   Notes: 
     *   - Both lower case and upper case characters can be used in the string
     *   - Any non-alphabetical chracter is returned unchanged,
     *     e.g. "Hi_!" would return the string " 8.9._.! "
     *   
     * @param s the string to be used. Example: "Hello!"
     * @returns a string containing the character positions separated by dots, 
     *   e.g. "8.5.12.12.15.!."
     */
    // block - removed %
    export function positions(s: string): string[] {
        let lower_a = "a".charCodeAt(0);
        let result = [];

        for (let x = 0; x < s.length; x++) {
            let char = s.charAt(x).toLowerCase();
            if (isLetter(char)) {
                let code = char.charCodeAt(0) - lower_a + 1;
                result.push(code.toString());
            }
            else {
                result.push(s.charAt(x));
            }
        }
        return result;
    }

    /**
     * TODO: describe your function here
     * @param value describe value here, eg: 5
     */
    // block - removed %
    export function isLetter(s: string): boolean {
        if (s.length === 1) {
            return s.toLowerCase() != s.toUpperCase();
        }
        else
            return false;
    }



    /**
     * TODO: describe your function here
     * @param value describe value here, eg: 5
     */
    // block - removed %
    export function show_positions(s: string): void {
        let arr = positions(s);
        for (let i=0; i<arr.length; i++) {
            basic.showString(arr[i]);
        }        
    }


}
