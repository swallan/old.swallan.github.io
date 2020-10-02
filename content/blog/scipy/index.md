---
title: "Undergraduate Research Assistant: SciPy"
date: "2019-11-30"
isCurrent: True
order: 1
description: As an undergraduate research assistant, I have been contributing to the Scientific Python ("SciPy") since November of 2019 under various research grants. 
---

## Overview ![scipy-logo](/scipy-logo-300.png)
As an undergraduate research assistant, I have been contributing to the Scientific Python ("SciPy") since November of 2019 under various research grants. Under supervision of a professor on campus, I have made enhancements to `scipy.stats` and `scipy.linalg`.

Most recently, under the grant, "A Solid Foundation for Statistics in Python with SciPy," we have worked to make enhancements in several areas to SciPy's statistical functions. See the full grant proposal [here](https://warrenweckesser.github.io/czi/scipy-2019-czi-proposal-revised.pdf). 



Most notably, I worked to

  1. increase the speed and accuracy of continuous distributions fit methods
  2. Add of the Alexander-Govern statistical test
  3. create the Tukey-Kramer test



Under a NumFOCUS grant, we made enhancements to `scipy.linalg` by wrapping 8 new fortran functions. I participated in this project by creating a parametrized unit test suite for each Fortran Linear Algebra Package (LAPACK) prior to the wrapper being written. 



## Statistics 

##### Fit methods


The fit methods for SciPy's continuous distributions ([`scipy.stats`](https://docs.scipy.org/doc/scipy/reference/stats.html)) by default determine the best fit by optimizing over its associated log-likelihood equation. While this often effective enough to satisfy user needs, as data size increase and the number of shapes and parameter increase, it can begin to take a long time. 

Through the use of maximum likelihood estimation (MLE) formula, we were able to cut down fit times by several factors, from milliseconds to microseconds. For example, if we take a look at the Pareto distribution's (`scipy.stats.pareto`) behavior in the benchmark that I wrote, there is a precipitous drop in fit speeds when the fit method was overridden:
![benchmark](/benchmark.png)

It is significant to note that MLE formula may not always be appropriate alongside fixed, non-optimal, other parameters. These situations did not experience a speed increase. 

This enhancement was conducted for 8 continuous distributions.

##### Addition of Statistical Tests

After starting with two separate implementations, @DominicChm and I merged together the best parts of each of our implementations after determining the best practices and most efficient method. We checked on this using a benchmark which is viewable in the commit history.

We have used the least possible list comprehensions and tried to utilize numpy array operations whenever possible. This experience helped me fine tune my benchmarking and testing skills, as there is limited support for this test across the wider internet, even amongst academic sources. 


### Linear Algbra ([`scipy.linalg`](https://docs.scipy.org/doc/scipy/reference/linalg.html))

I was able to work under a NumFOCUS grant to add support for several new Linear Algebra Package fortran routines with the use of a fortran to python ("f2py") wrapper. My main responsibility was to create a unit test suite to make sure that the routines were wrapped correctly. 

This meant conducting complex matrix calculations performed in python to check that the function was performing as expected. For example, one of such routines was `?TTRF`, which performed the LU factorization of a tridiagonal matrix, where `L @ U = A`. The fortran routines are much faster than calculations even with NumPy array optimizations. In this grant I was able to refine my not only my linear algebra skills, but have extensive use of unit testing frameworks, continuous integration, as well as collaborating remotely over github.