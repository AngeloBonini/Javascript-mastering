# DevOps

Projeto para concentrar scripts e aliases comuns do [Instituto Soma](http://institutosoma.org.br).

## Requisitos

- [Acesso SSH ao servidor do Gitlab](https://docs.google.com/document/d/1buKi0HRyCHhlmYxrZBhEd9xwne3oN0pLUysyoAJHRZE/edit#heading=h.f3ka5mi2t0kb)
- [oh-my-zsh (opcional)](http://ohmyz.sh)

## Instalação

``` sh
git clone gitlabsoma:institutosoma/devops.git ~/devops
```

Para ativar os aliases do DevOps:

``` sh
# ZSH
echo "source ~/devops/devops" | tee -a ~/.zshrc

# Bash
echo "source ~/devops/devops" | tee -a  ~/.bashrc
```

Em seguida, executar:

``` sh
# ZSH
source ~/.zshrc

# Bash
source ~/.bashrc
```

## Conteúdo

### DevOps

``` sh
devops
devops help
dv help
devops install
```

### Helpers

``` sh
echo $CHECK_SYMBOL
echo $ERROR_SYMBOL

# Output
# ✔
# ✖
```

### VPN

Ferramenta de conexão ao Instituto Soma

``` sh
vpn             #Conecta na VPN
vpn install     #Instala e configura o client OpenVPN
vpn daemon      #Conecta na VPN em background
vpn status      #Exibe estado de conexão
vpn exit        #Desconecta da VPN, caso conectado em background
```

### Pivotal

Ferramenta para manejo de tickets via terminal, criação de branch automaticamente baseada na descrição do ticket

``` sh
pivotal config                      #Gera configuração do usuário, projeto e token
pivotal list -u RB -p devops        #Lista tickets do usuário no projeto
pivotal start -t 12345678           #Altera estado do ticket para Started
pivotal finish -t 12345678          #Altera estado do ticket para Finished
```
> Os parâmetros -u e -p não são necessários após execuação do `pivotal config`

### Fileserver mount/umount

Ferramenta para fácil acesso a fileserver

``` sh
fileserver-mount        #Monta fileserver e exibe GUI
fileserver-mount ignore #Monta fileserver sem exibir GUI (ideal para scripts)
fileserver-umount       #Desmonta fileserver
```

### AWS-SSH

Ferramenta para conexão as Instances EC2 na AWS

``` sh
aws-ssh config              #Configura aliases de conexão em ~/.ssh/config
aws-ssh list                #Lista projetos disponíveis para conexão
aws-ssh connect together    #Conecta no projeto escolhido
```

### Hardware

Ferramentas relacionadas à hardware, como tamanho do monitor, limpar uso de memória, etc.

``` sh
monitor-size    #exibe resolução do monitor primário
ip-address      #exibe endereço IP
clear-memory    #limpa memória RAM cacheada
glances         #monitor de recursos do sistema
up2date         #sincroniza relógio
```

### Software

Aliases e funções que modificam o funcionamento padrão de alguns softwares, bem como automatizar a execução de muitas tarefas.

```
apt         #sudo apt
clean       #sudo apt-get autoremove -y && sudo apt-get clean
update      #sudo apt-get update && sudo apt-get upgrade -y
```

### Segurança

Altera a senha do AD (integrada ao GitLab, Google e Fileserver)
OBS: requer conexão com rede do Soma (VPN ou presencial)

```sh
altera-senha
```

### Instalações automatizadas

```sh
install-ambiente    #Instala dependências no sistema e projeto CPOS ou Arteris
install-docker      #Instala docker e docker-compose
install-go          #Instala GO
install-portainer   #Instala Portainer em docker na versão latest
install-postgres    #Instala Postgres 9.4
install-terraform   #Instala/atualiza Terraform
install-translate   #Instala Google Translate para Terminal
vpn install         #Instala OpenVPN
```

### Aliases

Aliases para ajudar no dia-a-dia

``` sh
dhelp       # Exibe aliases e funções para trabalhar com Docker e Docker-Compose
ghelp       #Exibe listagem de aliases do Git
ihelp       # Exibe listagem de aliases do Ionic
```

### Tomcat

Aliases relacionados à projetos que utilizam o Tomcat.

`tomcat-reboot`
Método utilizado para reiniciar o servidor Tomcat utilizado pelo aplicativo Recadmobile. (Conversar com Paulão)

### Projects

Aliases específicos dos projetos.

## TODO

- [ ] Instação automatizada do DevOps
- [x] Update automático ao iniciar o shell como o oh-my-zsh
- [x] Interface melhorada do DevOps com help e versão atual
- [ ] Detectar o S.O. do usuário e importar scripts específicos
