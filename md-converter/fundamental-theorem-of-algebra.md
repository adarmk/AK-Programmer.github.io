---
title: "Proof of the Fundamental Theorem of Algebra"
date: 2020-09-06T15:05:19-04:00

BlogPost: true
katex: true
markup: "mmark"
---

About a week ago, I read a rather elegant proof of the fundamental theorem of algebra involving the fundamental group of a circle. It's among the more surprising proofs I've read. As someone who knows very little about algebra and topology, I'm accustomed to algebraic structures being used to solve topological problems, but this proof bridged the two worlds in exactly the opposite way.

When I first read the proof, I was a little confused, mainly because I didn't understand the motivation behind the methods used. I could follow the logical chain, but I couldn't quite see the forest for trees. So in this post, I'll be taking the proof (taken from [Allen Hatcher's](https://pi.math.cornell.edu/~hatcher/AT/AT.pdf) book) and explaining it in greater detail–primarily as a test of my understanding and communication abililties, but also in the hopes that someone else might find this helpful. 

Without further ado, I present to you the fundamental theorem of algebra. 

<br>

**Theorem**. *Every nonconstant polynomial with coefficients in $$\mathbb{C}$$ has a root in $$\mathbb{C}$$.*

**Proof Outline:** 
1. Assume the polynomial above (denoted $$p(z)$$) has no roots in $$\mathbb{C}$$. 
2. Define a loop in $$S^1 \subset \mathbb{C}$$ that depends on $$p(z)$$ not having roots in order to be continuous.
3. Show that this loop is homotopic to the trivial loop in a way that depends on the degree of the polynomial being zero. 
4. Conclude that only polynomials of degree zero (constant polynomials) can have zero roots. 

*Proof.* Assume the polynomial is of the form $$p(z) = z^n + a_1 z^{n-1} + \cdots + a_n$$ (this guarantees that it is nonconstant). If $$p(z)$$ has no roots in $$\mathbb{C}$$, then for each real number $$r \geq 0$$, the formula 

$$f_r (s) = \frac{p(re^{2\pi i s})/p(r)}{|p(re^{2\pi i s})/p(r)|}$$

defines a loop in the unit circle $$S^1 \subset \mathbb{C}$$ based at 1. If $$p(z)$$ did have roots, then this loop might be discontinuous (dividing by zero causes problems). As $$r$$ varies, $$\\\ f_r$$ is a homotopy of loops based at 1. Since $$f_0$$ is the trivial loop (it isn't dependent on $$s$$), the class $$[f_r] \in \pi_1 (S^1)$$ is zero for all $$r$$. Now, fix a large value of $$r$$, larger than $$|a_1| + \cdots + |a_n|$$ and larger than 1. Then for $$|z| = r$$, we have 

$$|z^n| > (|a_1| + \cdots + |a_n|)|z^{n-1}| > |a_1 z^{n-1}| + \cdots + |a_n| \geq |a_1 z^{n-1} + \cdots + a_n|.$$

From $$|z^n| > (|a_1| + \cdots + |a_n|)|z^{n-1}|$$ it follows that the polynomial $$p_t = z^n + t(a_1 z^{n-1} + \cdots + a_n)$$ has no roots on the circle $$|z| = r$$ when $$0 \leq t \leq 1$$. Replacing $$p$$ by $$p_t$$ in the formula for $$f_r$$ and letting $$t$$ go from 1 to 0, we obtain a homotopy from the loop $$f_r$$ to the loop $$w_n (s) = e^{2\pi i n s}$$ (notice all the terms that disappear when this happens). Remembering that $$w_n$$ represents $$n$$ times a generator of the infinite cyclic group $$\pi_1 (S^1)$$. Since $$[w_n] = [f_r] = 0$$, it must be the case that $$n=0$$. Thus, the  only polynomials without roots in $$\mathbb{C}$$ are constant. 

$$\tag*{$\blacksquare$}$$

The decision to define the value of $$r$$ the way it was defined (larger than the sum of the magnitudes of the coefficients and larger than 1) may seem arbitrary, and in many ways, it is. From what I understand, it was defined that way solely to ensure that the inequalities above hold.