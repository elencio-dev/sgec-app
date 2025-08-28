# ===== ALIASES PARA GIT NO TERMINAL =====

# Comandos básicos do Git
alias g='git'
alias gs='git status'
alias ga='git add .'
alias gc='git commit'
alias gp='git push'
alias gl='git pull'
alias gco='git checkout'
alias gb='git branch'
alias gm='git merge'
alias gr='git rebase'
alias gst='git stash'
alias gd='git diff'
alias glog='git log'

# Comandos de workflow
alias gac='git add . && git commit -m'
alias gacp='git add . && git commit -m "$1" && git push'
alias gundo='git reset --soft HEAD^'
alias gredo='git commit -c ORIG_HEAD'
alias gsync='git pull origin $(git branch --show-current) && git push origin $(git branch --show-current)'

# Comandos de branch
alias gnew='git checkout -b'
alias gdel='git branch -D'
alias gswitch='git checkout'
alias gmain='git checkout main'
alias gmaster='git checkout master'

# Comandos de log
alias gl1='git log -1'
alias gl5='git log -5 --oneline'
alias gl10='git log -10 --oneline'
alias glg='git log --oneline --graph --decorate --all'

# Comandos de diff
alias gdc='git diff --cached'
alias gds='git diff --staged'
alias gdw='git diff --word-diff'

# Comandos de stash
alias gstl='git stash list'
alias gstp='git stash pop'
alias gsta='git stash apply'
alias gstd='git stash drop'

# Comandos de remote
alias grv='git remote -v'
alias gra='git remote add origin'
alias grshow='git remote show origin'

# Comandos de configuração
alias gconfig='git config --list'
alias gconfigg='git config --global --list'
alias gconfigl='git config --local --list'

# ===== FUNÇÕES ÚTEIS PARA GIT =====

# Criar e fazer checkout de uma nova branch
gnewb() {
    git checkout -b "$1"
}

# Fazer commit com mensagem
gcm() {
    git commit -m "$1"
}

# Fazer commit de todos os arquivos com mensagem
gcam() {
    git commit -am "$1"
}

# Fazer push para origin com a branch atual
gpo() {
    git push origin $(git branch --show-current)
}

# Fazer pull de origin com a branch atual
glo() {
    git pull origin $(git branch --show-current)
}

# Ver diferenças entre branches
gdiffb() {
    git diff main...HEAD
}

# Ver commits entre branches
glogb() {
    git log main..HEAD --oneline
}

# Limpar branches locais deletadas
gcleanup() {
    git branch --merged | grep -v '\*\|main\|master\|develop' | xargs -n 1 git branch -d
}

# Ver arquivos modificados
gmodified() {
    git diff --name-only
}

# Ver arquivos staged
gstaged() {
    git diff --cached --name-only
}

# Ver arquivos não rastreados
guntracked() {
    git ls-files --others --exclude-standard
}

# Ver commits de um autor específico
glogauthor() {
    git log --author="$1" --oneline
}

# Ver commits com uma mensagem específica
gloggrep() {
    git log --grep="$1" --oneline
}

# Ver commits de uma data específica
glogsince() {
    git log --since="$1" --oneline
}

# Ver estatísticas de um commit
gstat() {
    git show --stat "$1"
}

# Ver arquivos alterados em um commit
gfiles() {
    git show --name-only "$1"
}

# Ver conteúdo de um arquivo em um commit específico
gshowfile() {
    git show "$1:$2"
}

# Criar tag anotada
gtag() {
    git tag -a "$1" -m "$2"
}

# Ver reflog
greflog() {
    git reflog --oneline
}

# Ver tamanho do repositório
gsize() {
    git count-objects -vH
}

# Ver commits por autor
gauthors() {
    git shortlog -s -n
}

# Ver commits por data
gcommitsbyday() {
    git log --date=short --format='%ad' | sort | uniq -c
}

# Ver commits por hora
gcommitsbyhour() {
    git log --date=format:'%H' --format='%ad' | sort | uniq -c
}

# Ver commits por dia da semana
gcommitsbyweekday() {
    git log --date=format:'%u' --format='%ad' | sort | uniq -c
}

# ===== ALIASES PARA FLUXO DE TRABALHO =====

# Workflow básico
alias gwip='git commit -m "WIP"'
alias gdone='git commit -m "DONE"'
alias gfix='git commit -m "FIX"'
alias gfeat='git commit -m "FEAT"'
alias gdocs='git commit -m "DOCS"'
alias gstyle='git commit -m "STYLE"'
alias grefactor='git commit -m "REFACTOR"'
alias gtest='git commit -m "TEST"'
alias gchore='git commit -m "CHORE"'

# Workflow de feature
alias gfeature='git checkout -b feature/'
alias ghotfix='git checkout -b hotfix/'
alias grelease='git checkout -b release/'

# Workflow de merge
alias gmergemain='git checkout main && git merge $(git branch --show-current) && git branch -d $(git branch --show-current)'
alias gmergemaster='git checkout master && git merge $(git branch --show-current) && git branch -d $(git branch --show-current)'

# ===== ALIASES PARA TERMINAL =====

# Navegação
alias ..='cd ..'
alias ...='cd ../..'
alias ....='cd ../../..'
alias .....='cd ../../../..'

# Listagem
alias ll='ls -alF'
alias la='ls -A'
alias l='ls -CF'
alias lt='ls -lt'
alias ltr='ls -ltr'

# Busca
alias grep='grep --color=auto'
alias fgrep='fgrep --color=auto'
alias egrep='egrep --color=auto'

# Editores
alias e='code'
alias v='vim'
alias n='nano'

# Sistema
alias df='df -h'
alias du='du -h'
alias free='free -h'
alias top='htop'

# ===== FUNÇÕES PARA O TERMINAL =====

# Criar diretório e navegar para ele
mkcd() {
    mkdir -p "$1" && cd "$1"
}

# Navegar para diretório de projeto
cdp() {
    cd ~/projects/"$1"
}

# Listar diretórios
ld() {
    ls -d */
}

# Buscar arquivos
findf() {
    find . -name "*$1*" -type f
}

# Buscar diretórios
findd() {
    find . -name "*$1*" -type d
}

# Buscar conteúdo em arquivos
findc() {
    grep -r "$1" .
}

# Criar backup de um arquivo
backup() {
    cp "$1" "$1.backup.$(date +%Y%m%d_%H%M%S)"
}

# Ver histórico de comandos
h() {
    history | grep "$1"
}

# Limpar terminal
cls() {
    clear && ls -la
}

# Mostrar informações do sistema
sysinfo() {
    echo "=== SISTEMA ==="
    uname -a
    echo -e "\n=== MEMÓRIA ==="
    free -h
    echo -e "\n=== DISCO ==="
    df -h
    echo -e "\n=== PROCESSOS ==="
    ps aux | head -10
}

# Mostrar informações do Git
gitinfo() {
    echo "=== GIT STATUS ==="
    git status
    echo -e "\n=== GIT BRANCHES ==="
    git branch -a
    echo -e "\n=== GIT REMOTES ==="
    git remote -v
    echo -e "\n=== ÚLTIMOS COMMITS ==="
    git log --oneline -5
}
