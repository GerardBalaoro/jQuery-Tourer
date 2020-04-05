#!bash
echo "Checking out dist from master"
git checkout master -- dist
echo "Moving dist files to dedicated asset folders"
mv dist/*.css assets/css/
mv dist/*.js assets/js/
rmdir dist
