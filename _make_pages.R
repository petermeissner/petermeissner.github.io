#!/usr/bin/Rscript

##### SessionInfo ============================================================

cat("\n\n", sessionInfo()$R.version$version.string, "\n\n")


##### Settings ===============================================================
message("\n... starting ... \n")

try(setwd("~/Dropbox/petermeissner.github.io"), silent=TRUE)

# script for building webpage with Rrrrrrrrr rrrrr rrr and pandoc

##### FUNCTIONS ===============================================================

source("_make_pages_functions.R")

#### getting MD file names and YAML options ===================================
message("\n... doing conversion ... \n")

md_fnames   <- list.files(pattern="\\.md")
md_fnames   <- md_fnames[order(str_extract(md_fnames,"^\\d*"))]
html_fnames <- str_replace(
                str_replace(md_fnames, "^\\d*", ""), 
                "\\.md$", ".html"
              )


md_files <- lapply(md_fnames, readLines, encoding="UTF-8")
options  <- lapply(md_files, get_yaml_options)

md_sequence <- seq_along(md_files)



#### converting MD files to HTML fragments ====================================

for(i in md_sequence){
    markdownToHTML(md_fnames[i], html_fnames[i], encoding="UTF-8", fragment.only = TRUE)
}



#### creading HTML abck in ====================================================

html_files <- lapply(html_fnames, readLines, encoding="UTF-8")
html_files <- lapply(html_files, paste0, collapse="\n")



#### pasting together HTML layout and content =================================

menu <- 
  paste0(
    "<a href='", 
    str_replace(html_fnames, ".html", ""), 
    "'>",
    unlist(lapply(options, `[`, "title")),
    "</a>",
    collapse="<br>\n"
  )

for(i in md_sequence){
  layout <- readLines(paste0("_layouts/", options[[i]]$layout, ".html"), encoding="UTF-8")
  layout <- str_replace(layout, "\\{\\{[ ]{0,10}content[ ]{0,10}\\}\\}", html_files[[i]])
  layout <- str_replace(layout, "\\{\\{[ ]{0,10}title[ ]{0,10}\\}\\}",   options[[i]]$title)
  layout <- str_replace(layout, "<!-- jekyll menu solution source.*",  menu)
  layout <- layout[-grep("\\{%|\\{\\{", layout)]
  writeLines(layout, html_fnames[i], useBytes=TRUE)
}


#### uploading to server ======================================================
message("\n... uploading to server ... \n")

uploadToServer(
  html_fnames, 
  paste0("pmeissner/", html_fnames)
)

uploadToServer( "index.html", "pmeissner/index.html")
uploadToServer( "robots.txt", "pmeissner/robots.txt")
uploadToServer( "favicon.ico", "pmeissner/favicon.ico")
uploadToServer( "magnify.cur", "pmeissner/magnify.cur")



#### uploading other stuff to server too ======================================

#last_upload <- file.info("_make_pages.Rexec.log")$mtime

#if(file.info("images")$mtime > last_upload) upload_folder("images")
#if(file.info("downloads")$mtime > last_upload) upload_folder("downloads")
#if(file.info("stylesheets")$mtime > last_upload) upload_folder("stylesheets")


# upload_folder("images")
# upload_folder("stylesheets")
# upload_folder("downloads")
upload_folder("data")
upload_folder("javascripts")


#### log ======================================================================
message("\n... logging ... \n")
write(as.character(Sys.time()), file="_make_pages.Rexec.log", append=TRUE)


system("git add .")
system("git commit -a -m auto")
system("git push")


for(i in 1:20){
 Sys.sleep(1) 
 cat(".")
}
#### done =====================================================================
message("\n... done ... \n")




