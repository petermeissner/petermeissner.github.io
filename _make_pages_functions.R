
#### setting things up ========================================================

library(stringr)
library(markdown)
library(RCurl)


#### functions and helpers ====================================================
message("\n... def helpers ... \n")


    # get title and layout file to be used
    get_yaml_options <- function(md){
      opts_text <- md[(grep("--", md)[1]+1):(grep("--", md)[2]-1)]
      opts <- list()
      opts_names  <- lapply(str_split(opts_text, ":"), `[`, 1)
      opts_values <- lapply(str_split(opts_text, ":"), `[`, 2)
      for(i in seq_along(opts_text)){
        opts[str_trim(opts_names[[i]])] <- str_trim(opts_values[[i]])
      }
      return(opts)
    }

    uploadToServer <- function(files, dest){
      source(normalizePath(path.expand("~/.rftpcredentials"), winslash="/", mustWork=TRUE))
      for(i in seq_along(files)){
        ftpUpload(
          files[i], 
          paste0(
            "ftp://", ftp_user, ":", ftp_password, "@", ftp_server, "/", dest[i]
          )
        )
        message(paste("  ... ", files[i], " ... uploaded"))
      }
    }

upload_folder <- function(folder){
	images <- list.files(folder, full.names=TRUE)
	for ( f in images ){
		uploadToServer( f, paste0("pmeissner/", f) )
	}
	TRUE
}


