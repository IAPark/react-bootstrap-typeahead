import {uniqueId} from 'lodash';
import {getOptionLabel, getStringLabelKey} from './index';

export function getCustomOption(text, labelKey) {
  return {
    customOption: true,
    id: uniqueId('new-id-'),
    [getStringLabelKey(labelKey)]: text,
  };
}

function addCustomOption(results, text, labelKey) {
  const exactMatchFound = results.some((o) => (
    getOptionLabel(o, labelKey) === text
  ));

  if (!text.trim() || exactMatchFound) {
    return results;
  }

  return [...results, getCustomOption(text, labelKey)];
}

export default addCustomOption;