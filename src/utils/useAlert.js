import swal from '@/utils/swal.js';
import router from '@/router';

export function showSuccessAlert (msg = '新增成功!') {
  swal.fire('', msg, 'success');
}

export function showFailAlert (msg = '請勿輸入非整數或 超過 0~20') {
  swal.fire('', msg, 'error');
}

export function showEditSuccessAlert () {
  swal.fire('', '修改成功!', 'success');
}

export function showConfirm (text, successText, onConfirm) {
  swal.fire({
    title: '你確定?',
    text,
    icon: 'warning',
    showCancelButton: true,
    confirmButtonText: '對，刪除!',
    cancelButtonText: '取消'
  }).then(async result => {
    if (result.isConfirmed) {
      try {
        await onConfirm();
        swal.fire('刪除!', successText, 'success');
      } catch {
        swal.fire('', '操作失敗，請稍後再試', 'error');
      }
    }
  });
}

export function showNoCartAlert () {
  swal.fire({
    title: '購物車無任何商品',
    icon: 'warning',
    showCancelButton: true,
    confirmButtonText: '前往購物!'
  }).then(result => {
    if (result.isConfirmed) {
      router.push('/productList');
    }
  });
}
