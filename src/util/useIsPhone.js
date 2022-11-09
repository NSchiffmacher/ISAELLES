import { useState } from 'react';

const useIsPhone = (phoneWidth = 768) => {
  const [is_phone] = useState(
    window.innerWidth < 768 ? true : false
  );
  return is_phone;
}

export default useIsPhone;