cd ~/Documents/web/log

echo $1       >> index.html
date          >> index.html
echo '<br>'   >> index.html

grunt push
