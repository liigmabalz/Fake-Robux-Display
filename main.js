// ==UserScript==
// @name         ROBLOX+
// @namespace    http://tampermonkey.net/
// @version      1.0
// @description  QoL improvements
// @match        https://www.roblox.com/*
// @grant        none
// ==/UserScript==

(function() {
   'use strict';

   function modifyRobuxValues() {
       const robuxElement = document.getElementById('nav-robux-amount');
       const robuxBalanceElement = document.getElementById('nav-robux-balance');
       const transactionsBalanceElement = document.querySelector('.balance-label span');

       if (robuxElement) {
           robuxElement.textContent = '100M+';
       }

       if (robuxBalanceElement) {
           robuxBalanceElement.textContent = '100 005 489';
       }

       if (transactionsBalanceElement) {
           transactionsBalanceElement.textContent = 'My Balance: 100,005,489';
       }
   }

   modifyRobuxValues();

   // You can add ", TIME IN MS" to make it apply the modification every X ms but I found out that no delay is better as the moment you load roblox it change right away
   setInterval(modifyRobuxValues);
})();
