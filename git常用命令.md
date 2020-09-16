## git常用命令

1. 新建仓库

   - git init folder	在目录 folder 中新建一个仓库，实际上是在 folder 下新建一个 .git 目录。

2. 版本回滚

   - git reset --hard commit_id	退回到指定的commit_id

   - git push origin HEAD --force	推送到远程

   回滚之后的后悔药

   - git reflog	查看回滚的操作记录
   - git reset --hard commit_id  回滚

3. 远程仓库
   - git remote -v	查看远程仓库设置信息

   - git remote add [shortname] [url]  添加一个新的远程仓库

4. git 配置
   - git config --system --list	查看系统配置
   - git config --local --list  查看当前仓库配置
   - git config --global --list  查看当前用户配置
   - git config -- global user.name "username"  设置提交用户的用户名
   - git config --global user.email "user@email.com"  设置提交用户（commit）的email

5. git 分支

   - git branch testing：新建分支testing
   - git checkout testing：切换到已存在的分支 testing
   - git checkout -b \<newbranchname>：创建一个新分支并立刻切换获取

6. 查看版本历史

   - git log --oneline --decorate ：查看各分支当前所指的对象。
   - git log --oneline --decorate --graph --all：输出提交历史、各分支的指向以及项目的分支分叉情况。
   
7. 提交修改

   - git add .	把工作区的所有修改提交到暂存区
   - git commit -m 'commit infomation'   把缓冲区的内容提交到本地仓库的当前分支
   - git push  将本地仓库的修改推送到远程仓库
   - git status  查看工作区和暂存区修改的信息



QUESTION

1. Git 是如何保持数据的？

   git 保存的不是文件的变化或差异，而是一系列不同时刻的 **快照** (snapshot)。

2. Git 是怎么创建分支的？

   git 只是创建了一个可以移动的指针作为一个新的分支。Git 的分支实质上是包含所指对象校验和（长度为 40 的 SHA-1 值字符串）的文件，创建一个新分支就相当于往一个文件中写入 41 个字节（40 个字符和 1 个换行符），如此简单能不快吗？它不香吗？

3. Git 是怎么知道当前在那个分支上呢？

   git 有一个名为 HEAD 的特殊指针，它指向当前所在的分支。使用 `git log --oneline --decorate` 查看各分支当前所指的对象。

   

