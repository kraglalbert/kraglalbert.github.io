---
layout: post
title: "Python Reference for Technical Interviews"
comments: true
description: "A quick reference so that you can get started using Python for technical interviews."
keywords: "python, leetcode, technical interviews"
reading_time: 5
---

1. [Data Structures](#data-structures)
   - [Lists](#lists)
   - [Stacks](#stacks)
   - [Queues](#queues)
   - [Tuples](#tuples)
   - [Sets](#sets)
   - [Dictionaries](#dictionaries)
   - [Heaps](#heaps)
   - [Linked Lists](#linked-lists)
   - [Binary Trees](#binary-trees)
2. [Syntax](#syntax)
   - [Bitwise Operations](#bitwise-operations)
   - [Custom Sort Function](#custom-sort-function)
   - [Lambdas](#lambdas)
   - [String Operations](#string-operations)
   - [List Comprehensions](#list-comprehensions)

**Last updated:** May 10th, 2020

In the past I've used Java for all of my technical interviews, but recently I wanted to try switching to Python. I wrote something similar to this post on paper for Java, but I wanted to digitize it for Python to enable easier access for myself and others. I'll try to cover the basics of Python's built-in data structures as well as some less obvious parts of the language's syntax. This post will also likely get updated frequently as I add new things, fix mistakes, etc.

## Data Structures

#### Lists

Note that lists in Python can contain multiple, arbitrary data types.

The official documentation on lists can be found [here](https://docs.python.org/3/tutorial/datastructures.html).

```python
# initialize empty list

my_list = []

# initialize a list with pre-defined elements

my_list = [1, 2, 3]

# get element at index i

val = my_list[i]

# update element at index i

my_list[i] = new_value

# remove element at index i

# if no index is specified, then removes the element at the end of the list

my_list.pop(i)

# remove first element with value equal to x

# raises a ValueError if no element with that value exists

my_list.remove(x)

# add element to the end of the list

# my_list then contains [1, 2, 3, "Hello"]

my_list.append("Hello")

# add all elements from another iterable

my_list.extend(another_list)

# insert item at index i

my_list.insert(val, i)

# get length of list

length = len(my_list)

# count number of occurrences of element x

my_list.count(x)

# get index of element x

my_list.index(x)

# clear the entire list

my_list.clear()
```

Slicing and sublists:

```python
# get a sublist from index i (inclusive) to j (non-inclusive)

my_slice = my_list[i:j]

# get last n elements from a list

my_slice = my_list[-n:]

# get every 2nd element of the list

# note the general syntax is [start:stop:step]

my_slice = my_list[::2]

# get list in reversed order

my_slice = my_list[::-1]

# get first n elements from reverse-order list

my_slice = my_list[-n::-1]
```

Note that a slice creates a shallow copy of the original list, so it is safe to modify without changing the original list.

#### Stacks

Stacks in Python can be implemented with lists. This is shown below:

```python
# push onto the stack

my_stack.append(val)

# pop from the stack

my_stack.pop()
```

#### Queues

Queues could also be implemented using lists, but removing from the front isn't an efficient operation with lists. Instead, the official documentation recommends using a deque:

```python
from collections import deque

# initialize empty queue

queue = deque([])

# insert into queue

queue.append(1)

# remove from queue

queue.popleft()
```

#### Tuples

Tuples can be useful for wrapping up multiple variables in a single object. Note that they are immutable and must have their values defined when instantiated. However, tuples _can_ contain mutable objects, such as lists. They can also contain other tuples.

```python
# define a tuple

my_tuple = 1, "Hello", 45

# get element from tuple

my_tuple[0]
```

#### Sets

```python
# create an empty set

my_set = set()

# add to set

my_set.add(val)

# check if x is in the set

x in my_set

# remove x from the set

my_set.remove(x)

# take difference of two sets

my_set - other_set

# take intersection

my_set & other_set

# take union

my_set | other_set

# clear the set

my_set.clear()
```

#### Dictionaries

```python
# create empty dictionary

my_dict = {}

# add new entry

my_dict["key"] = "value"

# get entry

my_dict["key"]

# get entry with default value

my_dict.get("key", "default")

# check if key exists

"key" in my_dict

# get all items as tuple pairs

my_dict.items()

# get all keys

my_dict.keys()

# get all values

my_dict.values()

# remove a key-value pair

del my_dict["key"]

# clear dictionary

my_dict.clear()
```

#### Heaps

For a min heap with `heapq`:

```python
import heapq

# create empty heap

heap = []

# initialize heap from list

# modifies the list in-place in linear time

heapq.heapify(heap)

# push onto the heap

heapq.heappush(heap, 1)

# remove smallest item from the top of the heap

heapq.heappop(heap)

# access smallest item without removing it

heap[0]
```

One thing to note is that pushing tuples into the heap with `heapq` will result in the tuples being sorted by their first element. For example:

```python
heap = []

heapq.heappush(heap, (1, 'a'))
heapq.heappush(heap, (2, 'b'))

for _ in len(heap):
    # prints 'a' then 'b'

    print(heapq.heappop(heap)[1])
```

Max heaps are a little trickier. If the values being placed in the heap are simple numbers, then multiplying them by -1 will effectively invert their ordering. However, you have to remember to multiply numbers by -1 again once they are pulled out of the heap.

#### Linked Lists

Linked lists in Python can be defined as follows:

```python
class ListNode:
    def __init__(self, val=0, next=None):
        self.val = val
        self.next = next
```

#### Binary Trees

Binary trees in Python can be defined as follows:

```python
class TreeNode:
    def __init__(self, val=0, left=None, right=None):
        self.val = val
        self.left = left
        self.right = right
```

## Syntax

#### Bitwise Operations

```python
# bitwise AND

x & y

# bitwise OR

x | y

# bitwise XOR

x ^ y

# bitwise NOT/complement

~ x

# left shift by n bits

x << n

# right shift by n bits

x >> n
```

#### Custom Sort Function

To leave the original data structure intact, use the `sorted` function:

```python
# syntax: sorted(iterable, key, reverse=False)

my_list = [1, 6, 5, 4]

# basic sort from low to high

sorted_list = sorted(my_list)

# reverse sort from high to low

sorted_list = sorted(my_list, reverse=True)

# sort with custom key function

sorted_list = sorted(my_list, key=(lambda val : val[1]))

```

To modify the original data structure in-place, use the `sort` function:

```python
# syntax: sort(key, reverse=False)

my_list = [1, 6, 5, 4]

# basic sort from low to high

my_list.sort()

# reverse sort from high to low

my_list.sort(reverse=True)

# sort with custom key function

my_list.sort(key=(lambda val : val[1]))
```

#### Lambdas

Lambdas are anonymous functions in Python. The general syntax is `lambda <arguments> : <expression>`.

```python
# simple function that doubles a number

my_func = lambda x : 2*x

# multiple arguments

my_func = lambda x, y : x*y
```

#### String Operations

```python
# convert string to lowercase

my_str.lower()

# convert string to uppercase

my_str.upper()

# interleave a string with another string

# output: "H e l l o"

" ".join("Hello")

# join with a list of strings

# output: "A, B, C"

", ".join(["A", "B", "C"])

# output: "Hello world"

"".join(["Hello", "world"])

# split a string by specified delimiter

my_str.split(" ")

# replace contents of a string

my_str.replace(" ", ", ")
```

#### List Comprehensions

List comprehensions offer a short and quick way to create lists. The example below shows how a list can be created using the `map` function and how the same list can be created using comprehensions:

```python
# with the map function

squares = list(map(lambda x: x**2, range(10)))

# with comprehensions

squares = [x**2 for x in range(10)]

# comprehension with an if clause

squares = [x**2 for x in range(10) if x % 2 == 0]
```

Thanks for reading! If you found this helpful or have any corrections/suggestions, please let me know!
