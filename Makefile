SSH_HOST1={ssh-host}
SSH_USER={user}
WEB_DIR={web-dir}

deploy:
	rsync -arvuz ./web/ --delete ${SSH_USER}@${SSH_HOST1}:${WEB_DIR}/{your-dir}  --exclude-from 'exclude-list.txt'

create-dir:
	ssh ${SSH_USER}@${SSH_HOST1} "mkdir -p ${WEB_DIR}/{your-dir}"

first-deploy: create-dir deploy

whos-httpd:
	ssh ${SSH_USER}@${SSH_HOST1} "ps aux | grep -E '[a]pache|[h]ttpd|[_]www|[w]ww-data|[n]ginx' | grep -v root | head -1 | cut -d\  -f1"

timestamp:
	date