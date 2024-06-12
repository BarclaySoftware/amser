# Amser - The Free and Open-Source Web Desktop
Amser, the Welsh word for 'time', is a simple and customizable web desktop based on code from the [Caesium](https://github.com/BarclaySoftware/caesium) project, with some cool differences. See below for additions and changes.

## Note!
Amser is developed by the authors of Caesium, Barclay Software, but it has a different team who has different objectives in mind.

# Amser vs Caesium
1. Caesium is a set of three major programs: ID Central, Caesium Desktop, and Caesium Mobile. This dist only wants one.
    - ID Central is the main page of the Caesium project. When the user opens the page, ID Central checks the size of the screen the user is on. If it is too small, then ID Central sends the user to the Mobile version of Caesium. If it is any other size larger than a mobile screen, then ID Central sends the user to Caesium Desktop.
    - Amser removes ID Central because we are not interested in a mobile version because of the limited features. If Caesium Mobile is updated to include more functionality, then we may consider an Amser Mobile web desktop.
2. Caesium has a cluttered code base.
    - To make editing seamless for the development team, both version of Caesium are only one file each, with some external files for certain apps.
    - Amser's code base has moved the CSS and JavaScript code to their own files, `style.css` and `script.js` respectively. We also added comments to the original Caesium code and to the new code we added.
3. Caesium wasn't as customizable for developers.
    - Caesium was designed for simple use, but as they added more code to each project, it became cluttered, and their one-file system wasn't ideal for that much code. To keep things similar, we couldn't move things around, so our code is a bit cluttered too, but not as much.
4. Amser has more advanced designs and accessibility (in development)
    - In Caesium, when the user opens an app, the 'taskbar' (now the 'appbar' in Amser) makes no indication about which apps are open, the user needs to look at the 'desktop' to see which windows are open. In Ameser, we added an 'active-appbar-icon' CSS class to display a line under the appbar icon of the opened app(s).
    - Amser also adds CSS variables, so if you want to make your own web desktop with a custom theme, then you only have to change the CSS variables instead of having to change every instance of a color or font in the CSS file. This may make more work in the beginning, but you won't have to worry about creating custom themes later.
    - Amser uses fully open source fonts for the UI. In this version, Amser Hyd, uses a custom version of Robot Flex, which will be available in the source code and free for you to use.
    - We are still working, but we are adding accessibility for elements of the web desktop, where Caesium was lacking.