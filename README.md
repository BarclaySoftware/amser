# Amser - The Free and Open-Source Web Desktop
**Amser**, the Welsh word for 'time', is a make of the **[Caesium](https://github.com/BarclaySoftware/caesium)** project, which we also develop. Amser has some cool differences to Caesium. See them below.

## Key Features (for Developers)
1. Simplification of code.
    - This make of Caesium has removed all unwanted code and files, and moved the important code around. We've even added some comments so you can make out what is going on! Caesium is the non-outside dev version of our WebKernel, even though it is still open source.
    - We removed **ID Central**, the main page of the Caesium project that sends users to the version most fit for their screen size. We've also removed **Caesium Mobile**, as Amser is targeted to desktop users. If we add more features to Caesium Mobile in the future, we may create a mobile version of Amser.
    - We moved the CSS and JavaScript code to their own separate files, `style.css` and `script.js` respectively. This makes the main `index.html` file less cluttered and makes editing the developer experience better.
2. Implementation of CSS variables.
    - Within the `style.css` file, we have included an extensive list of CSS variables that make it easier for the developer to edit colors, without having to find each instance of a color and change it one-by-one.
    - The CSS variables also make it easier to use custom fonts. We recommend keepin the variable names as they are, and only changing the color codes or font names.
3. Renaming of HTML elements.
    - In Caesium, we named apps 'tasks' and called the section where the 'task icons' go the 'taskbar'. These names aren't true to what they actually are. So, in Amser we changed them to be 'apps' that open when you click an 'app icon', which are located in the 'appbar'.
4. Inclusion of more open source software.
    - It wouldn't be fun to have proprietary in an open source web desktop, would it? No. That's why we moved away from closed source software, like our brand fonts and closed source programs in favor of only open source items in this make of Caesium.
        - Some of these open source softwares include:
            1. Display fonts.
            2. Exclusive access to the CaesiumApps directory. (see **Extra Features**)
            3. Release of proprietary code.
            4. And more!

## Key Features (for Users)
1. User friendly designs.
    - In regular Caesium, when a user selects an app, there is no indication that it has been opened, aside from the fact that the app window appears. So, we took inspiration from operating systems and we added a little bar at the bottom of the icons opened apps. This makes it easier to distinguish opened apps from closed ones.
    - We made the text in the app titlebar bolded so you can distinguish titlebar text from normal app text.
2. Accessibility (in progress)
    - In our attempt to make Amser open and available to everyone, we've begun to implement the usage of HTML accessibility tags in our code so users who have a hard time can get to things on Amser without a struggle.

## Extra Features
1. As stated before, we do offer exclusive access to our closed and in-house CaesiumApps directory, where all of the Caesium apps are stored. We are willing to give any and every developer who agrees to our **Special Cases License** a free rendition of the Caesium Apps Suite 1.0.

## Acknowledgments
1. **[Realtime Colors](https://www.realtimecolors.com/)** for providing theming and coloring services.
2. **[Google Fonts](https://fonts.google.com/)** for providing the Roboto font sources.
3. **[Glass CSS](https://www.css.glass/)** for providing coding services.
4. **[FontForge](https://www.fontforge.org/)** for providing font editing services.
5. **[GitHub](https://www.github.com/)** for providing code hosting services
6. **[Cloudflare Pages](https://pages.cloudflare.com/)** for providing web hosting services.