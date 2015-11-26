---
author: peter meißner
title: Lost'n'Found
layout: default
---

## Listen Wikipedia by Hatnote 

Changes to Wikipedia as sound - tune in and chill out ... 

[http://listen.hatnote.com](http://listen.hatnote.com/#en)


## Administrative Boundaries Datasets (shape, R, EXRI, kmz, ... )

[Global Administrative Areas - Boundaries without limits](http://gadm.org/about)


## Linux pandoc for images / convert jpg to pdf

http://www.imagemagick.org/script/convert.php

*install:*

```bash
sudo apt-get imagemagick
```

*jpg to small grey scale pdf*

```bash
convert -density 300x300 -quality 2 -compress jpeg -colorspace Gray -colors 64 input1.jpg input2.jpg output.pdf
```

## saving RasPi image 

https://linuxundich.de/raspberry-pi/linux-images-fuer-den-raspberry-pi-auf-sd-karte-installieren/

## AutoHotKey for Linux

- autokey source: https://github.com/guoci/autokey-py3
- scripting API: http://autokey.googlecode.com/svn/trunk/doc/scripting/index.html
- example scripts: https://code.google.com/p/autokey/wiki/ContributedScripts

*install:* 

```bash
sudo apt-get autokey-qt
```

*"push marked text from Gedit to terminal"-autokey-script:*

```python
# autokey/python script for pushing text from Gedit to terminal
window.activate(title=":ACTIVE:")

# get class and title of current window, save clipboard
var1    = window.get_active_class()
title1  = window.get_active_title()
oldtext = clipboard.get_clipboard()
text =""

# only execute script from Gedit
if var1 == "gedit.Gedit" : 
    var2    = window.get_active_title()
    text    = clipboard.get_selection()
    window.activate(title="Terminal") 
    
    # paste to terminal
    if var2 == "Terminal" : 
        keyboard.send_keys(text)
        keyboard.send_keys("\n")

    # go back to Gedit
    window.activate(title=title1)

# restore clipboard
clipboard.fill_clipboard(oldtext)
```



## Adding CRAN mirror to repository list on Linux Ubuntu / Mint

https://cran.r-project.org/bin/linux/ubuntu/README.html


## A collection of text files on politics

http://www.textfiles.com/politics/


## A CC licensed book on string manipulations in R - Gaston Sanchez

http://gastonsanchez.com/Handling_and_Processing_Strings_in_R.pdf


## No Github passwords any more!

http://www.tilcode.com/push-github-without-entering-username-password-windows-git-bash/


## #!/usr/bin/Rscript not working 

http://stackoverflow.com/questions/2920416/configure-bin-shm-bad-interpreter


## adding mime type to Linux / *buntu and changing icon

http://askubuntu.com/a/56725/183446


## pushing to Github without username / password input 

http://stackoverflow.com/questions/8588768/git-push-username-password-how-to-avoid


## dinosaur data and pictures

http://www.nhm.ac.uk/discover/dino-directory/name/a/gallery.html



