cd ~/Documents/web/log

date          >> index.html
echo $1       >> index.html
echo '<br>'   >> index.html

grunt push
open index.html
