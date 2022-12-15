import Head from 'next/head';
import React, { useState, useEffect } from 'react';

export default function modalNavSidebar() {
  
	return (
		<div className="bg-white px-2 sm:px-4 py-2.5">
      <div class="hidden sm:block fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"></div>
      <div class="hidden sm:block fixed inset-0 overflow-hidden">
        <div class="pointer-events-none fixed inset-y-0 right-0 flex max-w-full pl-10">
          <div class="flex h-full w-[300px] flex-col overflow-y-scroll bg-white py-6 shadow-xl">
            <div class="px-4 sm:px-6">
              <h2 class="text-lg font-medium text-gray-900" id="slide-over-title">Panel title</h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};