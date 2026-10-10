'use client'
import { LucideIcon } from 'lucide-react';
import React from 'react'

interface  BaseButtonProps
{
    className: string;
    onClick(): void;
}

interface TextButton extends BaseButtonProps
{
    title: string;
    icon?: LucideIcon;
}

interface IconButton extends BaseButtonProps
{
    title?: never;
    icon: LucideIcon;
}

type ButtonProp = TextButton | IconButton;
function Button ({title, className, onClick, icon:Icon }:ButtonProp ) {
  return (
    <div>
      <button onClick={onClick} className={className}>
        {Icon && (
          <span className="icon-wrapper">
            <Icon className="w-5 h-5" />
          </span>
              )}
              
        {title && <span>{title}</span>}
      </button>
    </div>
  );
}

export default Button