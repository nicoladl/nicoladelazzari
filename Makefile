SSH_HOST1={ssh-host}
SSH_USER={user}
WEB_DIR={web-dir}

rsync:
	rsync -az --no-perms -i --omit-dir-times ./web/* --delete ${SSH_USER}@${SSH_HOST}:${WEB_DIR} --exclude-from 'exclude-list.txt'

gulp-prod:
	gulp prod

deploy: gulp-prod rsync

whos-httpd:
	ssh ${SSH_USER}@${SSH_HOST1} "ps aux | grep -E '[a]pache|[h]ttpd|[_]www|[w]ww-data|[n]ginx' | grep -v root | head -1 | cut -d\  -f1"

timestamp:
	date