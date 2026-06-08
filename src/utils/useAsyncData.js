import swal from '@/utils/swal.js';

export async function withLoading (loader, fn, errorMsg) {
  loader.doAjax();
  try {
    return await fn();
  } catch (err) {
    if (errorMsg) {
      swal.fire('', errorMsg, 'error');
    } else {
      throw err;
    }
  } finally {
    loader.timeIsOut();
  }
}
