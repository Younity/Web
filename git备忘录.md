# Git Cheat Sheet

## 配置 git

设置提交时的用户名和邮箱

```
$ git config --global user.name [your username]
$ git config --global user.email [email address]
```

查看所有的 git 配置，包括提交时的用户名和邮箱。
```
$ git config --list
```


## 使用帮助

三种可用的方式

```
$ git help [command name]
$ git [command name] --help
$ man git-[command name]
```

举个栗子，如果你需要使用关于config命令的帮助，你可以这样使用：
```
$ git config --help
```


## 创建一个新的仓库

```
$ git init
$ git clone [url]
```
使用`git init`，你可以给你正在使用的项目创建一个新的 Git 仓库，此时你应该在项目的文件夹上运行此命令。

这个项目可以是一个新的，里面什么都没有，也可以是已经存在的项目，但你想对它进行版本控制。

使用`git clone`，你将下载一份已存在的Git项目的副本。



## 改动

```
$ git status
```

如果你还没有使用 `git commit` 提交，这条命令会列出自你上次提交之后所有改动过的文件。

```
$ git add [file]
```

使用`git add`命令将文件添加到缓存区，你所改动的文件将会准备 `git commit`。

```
$ git commit -m [descriptive message]
```
对你要添加的文件使用`git add`命令之后，你要用`git commit -m "..."`来提交它。

```
$ git rm [file]
```

如果你想从你的项目中移除一个文件，你也必须在Git中移除它，以便提交更改。

```
$ git diff
```

`git diff`命令会比较当前工作目录和缓存区的内容【做出了改动，但是没有使用`git add`命令的内容】，结果会告诉你还没有缓存的改动。


```
$ git commit
```

如果你想用不带有`-m`标记的`git commit`命令，你选择的编辑器会被加载，你可以在那里输入提交信息。

你必须要提交一个信息，否则，提交将会被终止。

```
$ git tag [tag name]
```

`git tag`命令会给你最后一次提交打一个标签。这是非常有用的，因为你之后也可以访问这次提交，即使你已经提交了一些别的东西。

## 分支

**使用 Git，你可以同一时间使用同一项目的多个版本。每个版本被称为一个分支。**

每个项目都有多个分支版本，它们可以完全不同。

当你想给一个正在开发的项目添加一个新功能，这将非常有用，而且不会毁坏它。

你可以创建一个新的分支，在上面开发你的新功能，当新功能完善时，合并这条新的分支到它的起源。

```
$ git branch	列出所有分支
```

命令`git branch`会列出你项目中的每一条分支，并用`*`号标记你当前所在的分支。主分支每个项目都有，被称为`master`。

```
$ git branch [branch-name]	新建一个分支
$ git branch -d [branch-name]	删除一个分支
```

使用带有参数branch-name的`git braanch`命令会创建一个新的分支，这个分支会指向项目中你当前所在的位置。

例如，如果我在`master`分支使用最新的仓库调用`git branch test`,新分支`test`或指向最后一次提交的`master`分支。这意味着分支`master`中的所有东西，分支`test`中都有。

```
$ git checkout [branch-name]	切换到指定分支
$ git checkout -b [branch-name]	新建分支并切换到它
```

为了合并分支，你需要切换到你想要添加改动的分支。

```
$ git merge [branch]	合并分支
```

例如，我们现在要合并`test`分支到`master`分支，我们要运行`git checktout master`命令，然后运行`git merge test`命令。这将合并`test`分支到`master`分支，但可能会产生冲突问题。

如果我们在不同的分支中改变同一个的文件，冲突就会发生；
例如，我们在`test`分支中对`main.cpp`文件做了改动；
然后，我们回到`master`分支，在同一个`main.cpp`文件做一些改动；
当你试着合并分支时，你会得一条到错误信息；
为了解决这个问题，你不得不打开有冲突的文件，手动合并不同的代码行。
在`<<<<<<<HEAD`和`=======`之间的代码来自`master`分支，而在`=======`和`>>>>>>>test`之间的行来自`test`分支。


## 查看提交历史

浏览并核查项目的历史。

```
$ git log
$ git log -p
$ git log -p -[number]
```

使用`git log`命令，你会按反向时间顺序获取仓库中的提交列表，如果使用`-p`标志，将会输出一个对每个提交有差异说明的提交列表。

你可以使用`-[number]`标志限制显示的数量。


```
$ git diff [first-branch]...[second-branch]
```

`git diff`命令用来查看提交和分支间的不同。例如，`git diff test...master`会显示从你的`test`分支创建以来发生在`master`分支上的改动。


##  同步更改到远程仓库

*保持你的本地仓库和 GitHub 是一致的。*

```
$ git push
```

使用`git push`，将 **本地仓库** 中所有的提交发送到 **GitHub** 远程仓库。

```
$ git pull
```

使用`git pull`，将会把 GitHub 的内容更新到本地仓库。

例如，你的团队在做同一个项目，当有人改动了代码，并发送到 GitHub 上，你可以用`git pull`命令获取这些改动。

```
$ git push origin [tag name]	发送标签
```

当你使用`git push`命令，每一个提交都会被发送到 origin 指定的远程仓库。

要发送标签到 GitHub 的时候，你要用到 `git push origin [tag name]` 命令，这将更新 GitHub 上的标签。

```
$ git push origin --tags
```

使用`--tag`标志，你将发送所有的标签到 GitHub 。
