source ~/code/venv3.8/bin/activate
DIR=$(ls ~ | grep code);
if [$DIR == '']; then
    echo 'Running on WSL1'
    source /mnt/c/code/venv38/bin/activate
elif [$DIR == 'code']; then
    echo 'Running on WSL2'
    source ~/code/venv3.8/bin/activate
fi;
python simpleserver.py