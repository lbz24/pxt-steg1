
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

let stars = [
    b, b, b, b, b, b, o, b,
    b, b, b, b, b, o, y, r,
    b, o, b, b, b, b, r, b,
    o, y, r, b, b, b, b, b,
    b, r, b, b, b, o, b, b,
    b, b, b, b, o, y, r, b,
    b, b, b, b, b, r, b, b,
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

let star_steg = [
    (0, 0, 0), b, b, b, b, b, o, b,
    b, b, b, b, b, o, y, r,
    b, o, b, b, b, b, r, b,
    o, y, r, b, b, b, b, b,
    b, r, b, b, b, o, b, b,
    b, b, b, b, o, y, r, b,
    b, b, b, b, b, r, b, b,
    b, b, b, b, b, b, b, b];


// set up arrays of images
let imagesArr = [heart,  apple,   dinosaur,   pacman,   ghost,   crown,  stars,  rainbow_vert];
let namesArr = ["heart", "apple", "dinosaur", "pacman", "ghost", "crown", "stars", "rainbow"];
let currentIndex = 0;
let currentPixel = 0;


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
    //% block="stars"
    Stars,
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
        case Images.Stars: return 6;
        case Images.Rainbow: return 7;
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
    let r = Math.floor(colour / 256 / 256);
    let g = Math.floor(colour / 256) % 256;
    let b = colour % 256;
    let rgb_array = [r, g, b];
    return rgb_array;
}

// internal function to support showColour
function showColourInt(pixel: number, red: number, green: number, blue: number): void {
    display.setPixelColor(pixel, neopixel.colors(neopixel.rgb(red, green, blue)))
    display.show()
}

// internal function to check if parameter is a single character
function isLetter(s: string): boolean {
    if (s.length === 1) {
        return s.toLowerCase() != s.toUpperCase();
    }
    else
        return false;
}

// internal recursive function to convert decimal number to binary
// note: returned binary number always has leading zero
// note: tried using toString with radix 2, but reported error (expected no parameter) 
function recursiveDecBin(dec_num: number): string {
    if (dec_num === 0)
        // base case: return "0" if dec_num=0 
        return "0";
    else {
        // first part: recursive call with integer division of dec_num by 2
        // second part: append remainder (gives string)
        return (recursiveDecBin(Math.floor(dec_num / 2))
            + (dec_num % 2));
    }
}

// internal wrapper function for recursiveDecBin
// note: expected num is 0..63; returned str will be 6 bit binary
function convertDecBin(dec_num: number, bits: number): string {
    if (bits === 6) {
        // only convert 0..63 (to give 6 bit binary). Otherwise return 0
        if (dec_num > 63 || dec_num < 0)
            return "000000"
    }
    else if (bits === 8) {
        // only convert 0..255 (to give 8 bit binary). Otherwise return 0
        if (dec_num > 255 || dec_num < 0)
            return "00000000"
    }

    // dec_num is in correct range, so call to recursive function
    let bin = recursiveDecBin(dec_num);

    // ensure returned str is 6 or 8 bit binary
    let len = bin.length;
    if (len > bits) {
        // get rid of leading zero from recursive function
        return bin.slice(1);
    }
    else {
        // pad with leading zeros to get 6 bit binary
        for (let i = 0; i < bits - len; i++)
            bin = "0" + bin;
        return bin;
    }
}

// internal function to switch from binary to decimal
// note: expected num is 0..63; returned str will be 6 bit binary
function convertBinDec(bin_num: string): number {
    let multiplier = 1;
    let result = 0;
    for (let i=bin_num.length-1; i>=0; i--) {
        if (bin_num[i] === "1")
            result = result + multiplier;
        multiplier = multiplier * 2;
    }
    return result;
}

// internal function to support changeColour
function changeColourInt(red: number, green: number, blue: number, img: Images, pixel: number): void {
    let imgIndex = findIndex(img);
    imagesArr[imgIndex][pixel] = neopixel.rgb(red, green, blue);
    display.show()
}

// internal function to support encode
function encodeInt(letter_binary: string, img: Images, pixel: number): void {
    // get rgb colour (as array) for given pixel of given image
    let imgIndex = findIndex(img);
    let colour = imagesArr[imgIndex][pixel];
    let rgb = getRGB(colour);  // rgb is array [r, g, b]
    let rgb_str = ["","",""];

    for (let i=0; i<3; i++) {
        rgb_str[i] = convertDecBin(rgb[i], 8);
        rgb_str[i] = rgb_str[i].slice(0, -2); // get rid of 2 least significant bits (steganography method)
        rgb_str[i] = rgb_str[i] + letter_binary.slice(0,2);  // replace with part of the binary letter
        letter_binary = letter_binary.slice(2);
        // convert binary to integer
        rgb[i] = convertBinDec(rgb_str[i]);
        //basic.showString(">" + rgb[i] + "<")
    }

    // finally change the given pixel on the given image
    changeColourInt(rgb[0], rgb[1], rgb[2], img, pixel);
}

// -- SHOW RGB COLOUR on MICRO:BIT --
function showRGBcolour(): void {
    let colour = imagesArr[currentIndex][currentPixel];
    let colour_array = getRGB(colour);
    basic.showString(currentPixel+":" + colour_array[0] + "," + colour_array[1] + "," + colour_array[2]);
}

GAME_ZIP64.onButtonPress(GAME_ZIP64.ZIP64ButtonPins.Fire1, GAME_ZIP64.ZIP64ButtonEvents.Click, function () {
    showRGBcolour();
})


// --- CONTROL MOVEMENT ---

function tempHighlightPixel(): void {
    // get original colour of pixel
    let colour = imagesArr[currentIndex][currentPixel];
    let colour_array = getRGB(colour);

    // change pixel to white
    display.setPixelColor(currentPixel, neopixel.colors(NeoPixelColors.White))
    display.show();
    basic.pause(100);

    // change back to original colour
    display.setPixelColor(currentPixel, neopixel.rgb(colour_array[0], colour_array[1], colour_array[2]))
    display.show();
}

// control movement around the Zip64 display
GAME_ZIP64.onButtonPress(GAME_ZIP64.ZIP64ButtonPins.Right, GAME_ZIP64.ZIP64ButtonEvents.Click, function () { 
    currentPixel++;
    if (currentPixel % 8 === 0)
        currentPixel = currentPixel - 8;
    tempHighlightPixel();
})

GAME_ZIP64.onButtonPress(GAME_ZIP64.ZIP64ButtonPins.Left, GAME_ZIP64.ZIP64ButtonEvents.Click, function () {
    currentPixel--;
    if (currentPixel < 0 || currentPixel % 8 === 7)
        currentPixel = currentPixel + 8;
    tempHighlightPixel();
})

GAME_ZIP64.onButtonPress(GAME_ZIP64.ZIP64ButtonPins.Down, GAME_ZIP64.ZIP64ButtonEvents.Click, function () {
    currentPixel = currentPixel + 8;
    if (currentPixel > 63)
        currentPixel = currentPixel - 64;
    tempHighlightPixel();
})

GAME_ZIP64.onButtonPress(GAME_ZIP64.ZIP64ButtonPins.Up, GAME_ZIP64.ZIP64ButtonEvents.Click, function () {
    currentPixel = currentPixel - 8;
    if (currentPixel < 0)
        currentPixel = currentPixel + 64;
        tempHighlightPixel();
})


/**
 * Custom blocks for Cryptography - Steganography
 */

//% color="#B39EF3" weight=115
namespace cryptsteg {

    // SHOW COLOUR
    /**
     * set the specified pixel to the rgb colour provided 
     */
    //% block="show colour red $red|green $green|blue $blue|at pixel $pixel"
    //% pixel.min=0 pixel.max=63 v.defl=0
    //% red.min=0 red.max=255 red.defl=0
    //% green.min=0 green.max=255 green.defl=0
    //% blue.min=0 blue.max=255 blue.defl=0
    //% inlineInputMode=inline
    export function showColour(pixel: number, red: number, green: number, blue: number): void {
        showColourInt(pixel, red, green, blue);
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

    // Advanced functions below here ...

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

   // CHANGE COLOUR (write to image)
    /**
     * changeColour use the new rgb values for the given image and at the specified pixel
     * @param red the new value for the red component
     * @param green the new value for the green component
     * @param blue the new value for the blue component
     * @param img the image to be changed
     * @param pixel the pixel to be changed
     */
    //% block="change colour red $red|green $green|blue $blue|on image $img|at pixel $pixel"
    //% advanced=true
    //% pixel.min=0 pixel.max=63 pixel.defl=0
    //% red.min=0 red.max=255 red.defl=0
    //% green.min=0 green.max=255 green.defl=0
    //% blue.min=0 blue.max=255 blue.defl=0
    //% inlineInputMode=inline
    export function changeColour(red: number, green: number, blue: number, img: Images, pixel: number): void {
        changeColourInt(red, green, blue, img, pixel);
    }


    // ENCODE STRING
    /**
     * encode the string in the given image, starting at the specified pixel value
     * @param str the string being hidden
     * @param img the image to be used
     * @param pixel the pixel at which to start
     */
    //% block="encode string $str in image $img || starting at pixel $pixel"
    //% advanced = true
    //% pixel.min=0 pixel.max=63 pixel.defl=0
    //% letter.defl="a"
    //% expandableArgumentMode="toggle"
    //% inlineInputMode=inline
    export function encode_str(str: string, img: Images, pixel?: number): void {
        let num = 0;
        let letter_binary = ""
        for (let i = 0; i < str.length; i++) {
            // check this character is single char, get ascii and convert to 1..26 for a-z (other chars -> 0)
            if (isLetter(str.charAt(i).toLowerCase())) {
                num = str.charCodeAt(i) - "a".charCodeAt(0) + 1;
                letter_binary = convertDecBin(num, 6);
                //basic.showString(">" + letter_binary + "<")

                encodeInt(letter_binary, img, pixel + i);
            }
            else
                encodeInt("000000", img, pixel + i);
        }
    }

    // ENCODE CHAR
    /**
     * encode Pixel for the given image, the specified pixel value is coded with the new rgb values
     * @param letter the letter being hidden in the rgb colour
     * @param img the image to be changed
     * @param pixel the pixel to be changed
     */
    //% block="encode char $letter in image $img at pixel $pixel"
    //% advanced = true
    //% pixel.min=0 pixel.max=63 pixel.defl=0
    //% letter.defl="a"
    //% inlineInputMode=inline
    export function encode_char(letter: string, img: Images, pixel: number): void {
        // check str is single char, get ascii and convert to 1..26 for a-z (other chars -> 0)
        if (isLetter(letter.charAt(0).toLowerCase())) {
            let num = letter.charCodeAt(0) - "a".charCodeAt(0) + 1;
            let letter_binary = convertDecBin(num, 6);
            //basic.showString(">" + letter_binary + "<")

            encodeInt(letter_binary, img, pixel);
        }
        else
            encodeInt("000000", img, pixel);
    }

}
