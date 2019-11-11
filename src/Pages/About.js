import React from 'react';
import { Link } from 'react-router-dom';

export default () => (
  <header className="Nav">
    <h1>About the Nice Numbers Project</h1>
    <div>
      <h3 href="#inspiration">The Inspiration</h3>
      <div>
        Two-Factor Authentication (2FA) is getting increasingly prevalent.
        You know the drill; you login/signup, enter your phone number wait a minute for a text and then have to enter what ever code it was that you received.
        Usually they're 4-8 digits, some are alpha-numberic (although this project does not currently address codes of that format),
        but the point is, sometimes you get that code and you have to look back and forth a few times before you can copy it over.  Other times,
        that number feels strangely coincidental, it has a lot of 4s or an ascending sequence.  Wouldn't it be nice if every code you got 
        was that easy to copy over?

        This project is also influenced by Randall Munroe's colors project, you can read about that here: <a>Colors</a>
      </div>
      <h3 href="#rate">Phase 1</h3>
      <div>
        Phase 1 of this project is to crowdsource what numbers are the "nice" ones.  That's the primary purpose of this website.
        Visit <Link to="/rate">rate</Link> to be part of the crowd.  On this scale 1 would be the sort of number it'd be hard to remember long enought to transfer
        from a text on your phone to an input box on a website on a laptop computer (e.g. "748192", "937264").
        On the other end, a 5 would be the kind of number that kind of jumps out and you wouldn't have to look twice to transfer (e.g. "234555", "882282", "975311").
        Of course this is all subjective, and feel free to disagree with the examples I've given, maybe one of the ugly ones was nearly your childhood zipcode,
        or you don't see the pattern in the "nice" ones I've given as examples.  That's fine, use your own judgement, this is about 
        finding the numbers that everyone finds nice.
      </div>
      <h3 href="#game">Phase 1.5</h3>
      <div>
        I've admitted that the scoring in phase 1 is extremely subjective and is subject to people not being good judges of their
        own abilities. So, phase 1.5 is going to be a slightly better metric of a number's nice-ness; at this time, it is yet to be implemented.
        Basically, it's going to a simulation of the transfer experience and the score screen will be adapted to have two tabs,
        one that shows the number, the other with an box to type it into and the number of switches as well as the total time to transfer
        will be tallied. We might the 1-5 scorer around as well, might be interesting to see if people are actually a good judge or what's easy
        and what isn't.  The data will show.
      </div>
      <h3 href="#analysis">Phase 2</h3>
      <div>
        Once we have some data, we're going to need to find out what it says, that's phase 2.  I have some basic statistics experience,
        but I'd love to get someone with data science/data analysis experience to make this phase more robust.  If you'd
        like to help, please reach out via the <a href="">Contact Us</a> page.
      </div>
      <h3 href="#product">Phase 3</h3>
      <div>
        The goal and final product of this project will the the creation of a package to perform random number generation
        that is skewed towards numbers generally considered "nice" and easy to transfer.  Or even configurable to also be
        able to produce on average less nice numbers.  As this algorithm is being developed I hope to validate it using existing 
        rating infrastructure by sometimes providing purely "random" numbers and others numbers produced by the algorithm.
      </div>
    </div>
    <h1>About Me</h1>
    <div>
      My name is Marci "Mickey" McClenon, I live and grew up in Austin, TX.  I'm a full-time software engineer, usually full-stack
      javascript and have been doing that for going on two years.  I grew up mathy and I have always been very aware of patterns
      so I may be more attuned to "nice numbers" than other people, but I'm pretty sure all people appreciate them.
    </div>
  </header>
);