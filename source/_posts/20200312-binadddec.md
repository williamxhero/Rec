---
title: BinAddDec
mathjax: true
categories:
  - [学习笔记, 计算机原理]
date: 2020-03-12 14:04:14
tags:
---

$$
\begin{aligned}
1100 &=-4 \\
1101 &= -3 \\
1110 &= -2 \\
1111 &= -1 \\
0000 &=0 \\
0001 &= 1 \\
0010 &= 2 \\
0011 &= 3 \\
0100 &= 4 \\
\end{aligned}
$$

>Q : 为何-1是1111？  
>A : 因为溢出了。

$$
\begin{aligned}
10000 \\
-\qquad\quad 1 \\
\hline
01111
\end{aligned}
\quad\Rightarrow \quad 0000-1=1111 
$$

$$
\begin{gathered}
3\Rightarrow-3\\ 
0011\Rightarrow1100+1\Rightarrow1101
\\ 取反+1
\end{gathered}
$$

$$
\begin{gathered}
-3 \Rightarrow 3 \\
1101 \Rightarrow 0010+1=0011 \\
取反+1
\end{gathered}
$$

这套系统，将减法化为加法。将整数和负数统一对待。

2进制加1：  从右往左依次反转，直到反转遇到的第一个0为止。  

$$
\begin{gathered}
11011111 \\ 
\downarrow  \\
11011110 \\ 
\downarrow \\ 
11011100 \\ 
\downarrow \\ 
\cdots\\ 
\downarrow \\ 
11100000
\end{gathered}
$$