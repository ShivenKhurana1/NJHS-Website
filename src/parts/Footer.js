/* eslint-disable linebreak-style */
/* eslint-disable react/jsx-filename-extension */
/* eslint-disable import/extensions */

import React from 'react';

import BrandIcon from './BrandIcon';
import Button from '../elements/Button';

export default function Footer() {
  return (
    <div className="bg-gray-50 border-t border-gray-200 pb-6">
      <div className="container flex-col mx-auto ">
        <div className="flex flex-col sm:flex-row mt-8 justify-center">
          <div className="w-1/3 flex-col ml-16 mr-8">
            <BrandIcon />
            <p className="w-full text-lg text-gray-400 font-light">
              Helping Others
              {' '}
              <br />
              Is Our Calling
            </p>
          </div>
        <div className="flex-col text-center mt-7">
          <div className="flex-row">
            <p className="inline-block text-lg text-gray-400 font-light">
              Made with &#x2764; by&nbsp;
            </p>
            <Button href="https://github.com/ShivenKhurana1" type="link" target="_blank" className="text-lg text-theme-purple font-light" isExternal>
              Shiven Khurana
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
