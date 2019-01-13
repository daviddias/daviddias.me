---
title: "A tl;dr to InterPlanetary Linked Data"
date: "2018-01-06"
slug: "tldr-to-interplanetary-linked-data"
tags:
  - "ipld"
  - "ipfs"
---

To respond the recent surge of questions around [IPLD (InterPlanetary Linked Data)](https://ipld.io), I created brief [tweeter moment](https://twitter.com/i/moments/975188963987095552) to share some of its key aspects. Now I'm cross sharing it here.

<div align="center">
  <img src="https://raw.githubusercontent.com/ipld/ipld/master/logo/ipld-logo.png" style="width: 240px"></img>
</div>

⓵
<blockquote class="twitter-tweet">
  <p lang="en" dir="ltr">
    It seems that more people are picking up on what IPLD is for (InterPlanetary Linked Data). I’ve had a good amount of conversation describing and exploring what <a href="https://twitter.com/IPLDbot?ref_src=twsrc%5Etfw">@IPLDbot</a> is and can do and so I thought it would be a good time to share some of the highlights with you all.
    <a href="https://twitter.com/daviddias/status/949650294656430082?ref_src=twsrc%5Etfw"><i data-feather="link"></i></a>
  </p>
</blockquote>

⓶
<blockquote class="twitter-tweet">
  <p lang="en" dir="ltr">
    IPLD is a canonical way to describe, fetch, query and transform content addressed data (aka hash linked data). You get one API to access any data that can be identified by a cryptographic fingerprint, think git, torrents, blockchain data and of course <a href="https://twitter.com/IPFSbot?ref_src=twsrc%5Etfw">@IPFSbot</a> files.
    <a href="https://twitter.com/daviddias/status/949650296015413248?ref_src=twsrc%5Etfw"><i data-feather="link"></i></a>
  </p>
</blockquote>

⓷
<blockquote class="twitter-tweet">
  <p lang="en" dir="ltr">
    One of <a href="https://twitter.com/IPFSbot?ref_src=twsrc%5Etfw">@IPFSbot</a> key features is a way to move files between machines and the mechanism to do that (Bitswap) also enables it to transfer any data that can be represented as an IPLD graph. A file that is transferred using IPFS is done by creating an IPLD graph representation of it.
    <a href="https://twitter.com/daviddias/status/949650297919504384?ref_src=twsrc%5Etfw"><i data-feather="link"></i></a>
  </p>
</blockquote>

⓸
<blockquote class="twitter-tweet">
  <p lang="en" dir="ltr">
    We call this file representation by “UnixFS”, it lets you import, transfer and export files and it comes with every IPFS implementation. However, it is just one of many possible file formats nothing stops you from creating your own optimized file format for your data.
    <a href="https://twitter.com/daviddias/status/949650299714666496?ref_src=twsrc%5Etfw"><i data-feather="link"></i></a>
  </p>
</blockquote>

⓹
<blockquote class="twitter-tweet">
  <p lang="en" dir="ltr">
    In fact, even UnixFS has 3 main modes: balanced (the default used), trickle (optimized for video streaming) and Rabin (uses Rabin fingerprinting to divide the chunks minimize future sync time on file updates)
    <a href="https://twitter.com/daviddias/status/949650301245644803?ref_src=twsrc%5Etfw"><i data-feather="link"></i></a>
    </p>
</blockquote>

⓺
<blockquote class="twitter-tweet">
  <p lang="en" dir="ltr">
    Today, you can already use IPFS to traverse Git repos — <a href="https://t.co/DBDoRC0cEx">https://t.co/DBDoRC0cEx</a> —, the Ethereum, ZCash and Bitcoin blockchains — <a href="https://t.co/TYLisKh9gt">https://t.co/TYLisKh9gt</a> — and with other data formats support to come.
    <a href="https://twitter.com/daviddias/status/949650302617182208?ref_src=twsrc%5Etfw"><i data-feather="link"></i></a>
  </p>
</blockquote>

⓻
<blockquote class="twitter-tweet">
  <p lang="en" dir="ltr">
    IPLD uses a plugin approach to add the support to traverse through different formats. To add support for a new one, simply create a module that follows the — <a href="https://t.co/oylaoTtcad">https://t.co/oylaoTtcad</a> — interface.
    <a href="https://twitter.com/daviddias/status/949650304517144576?ref_src=twsrc%5Etfw"><i data-feather="link"></i></a>
  </p>
</blockquote>

⓼
<blockquote class="twitter-tweet">
  <p lang="en" dir="ltr">
    Want to learn more, join the chat at <a href="https://twitter.com/hashtag/IPFS?src=hash&amp;ref_src=twsrc%5Etfw">#IPFS</a> on freenode, check out the “Enter the Merkle Forest” talk — <a href="https://t.co/PHbRIGPNTo">https://t.co/PHbRIGPNTo</a> — and/or visit ipld.io.
    <a href="https://twitter.com/daviddias/status/949650306492755968?ref_src=twsrc%5Etfw"><i data-feather="link"></i></a>
  </p>
</blockquote>

<!-- <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script> -->
