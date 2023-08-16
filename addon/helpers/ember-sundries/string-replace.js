import { helper } from '@ember/component/helper';

export default helper(function emberSundriesStringReplace(params, opts) {
  const string = params[0];
  if (!string) {
    return;
  }
  if (!opts.find) {
    return string;
  }
  const replaceString = opts.replace || '';
  const re = new RegExp(opts.find, opts.flags);
  return string.replace(re, replaceString);
});
