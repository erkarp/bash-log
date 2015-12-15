###Add the following code to .bash_profile:
`alias log='bash ~/Documents/web/log/script.sh'`

###Update the grunt-ftp-push dest option:
`dest: "/public_html/log/",`
More info: https://github.com/Robert-W/grunt-ftp-push

###Usage in terminal:
`$ log "Sample message"`
