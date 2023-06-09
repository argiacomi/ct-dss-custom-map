import * as React from 'react';
import { cn } from '../lib/utils';

const TextField = React.forwardRef(({ className, ...props }, ref) => {
  return (
    <input
      className={cn(
        'flex w-full rounded-md border border-slate-300 bg-transparent bg-white px-3 py-2 text-sm text-gray-1000 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 dark:border-slate-700 dark:focus:ring-slate-400 dark:focus:ring-offset-slate-900',
        className
      )}
      ref={ref}
      {...props}
    />
  );
});
TextField.displayName = 'TextField';

export { TextField };
