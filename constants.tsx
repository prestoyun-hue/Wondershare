import { NavItem } from './types';

export const NAV_ITEMS: NavItem[] = [
  { label: '홈', href: '#hero' },
  { label: '기능 소개', href: '#features' },
  { label: '고객 사례', href: '#case-studies' },
];

export const COMPANY_LOGOS = [
  { 
    name: 'Microsoft', 
    url: 'https://upload.wikimedia.org/wikipedia/commons/9/96/Microsoft_logo_%282012%29.svg' 
  },
  { 
    name: 'BOSE', 
    // SVG data URI for BOSE (Black text)
    url: 'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAxMDAgNDAiPjx0ZXh0IHg9IjUwJSIgeT0iNTAlIiBkb21pbmF0LWJhc2VsaW5lPSJtaWRkbGUiIHRleHQtYW5jaG9yPSJtaWRkbGUiIGZvbnQtZmFtaWx5PSJzYW5zLXNlcmlmIiBmb250LXdlaWdodD0iOTAwIiBmb250LXNpemU9IjI2IiBmaWxsPSIjMDAwIj5CT1NFPC90ZXh0Pjwvc3ZnPg=='
  },
  { 
    name: 'PUMA', 
    // Generating a text-based SVG for Fuma to ensure correct display
    url: 'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAxMDAgNDAiPjx0ZXh0IHg9IjUwJSIgeT0iNTAlIiBkb21pbmF0LWJhc2VsaW5lPSJtaWRkbGUiIHRleHQtYW5jaG9yPSJtaWRkbGUiIGZvbnQtZmFtaWx5PSJzYW5zLXNlcmlmIiBmb250LXdlaWdodD0iYm9sZCIgZm9udC1zaXplPSIyNCIgZmlsbD0iIzY2NiI+RnVtYTwvdGV4dD48L3N2Zz4='
  },
  { 
    name: 'KINTEX', 
    // Generating a text-based SVG for KINTEX
    url: 'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAxMjAgNDAiPjx0ZXh0IHg9IjUwJSIgeT0iNTAlIiBkb21pbmF0LWJhc2VsaW5lPSJtaWRkbGUiIHRleHQtYW5jaG9yPSJtaWRkbGUiIGZvbnQtZmFtaWx5PSJzYW5zLXNlcmlmIiBmb250LXdlaWdodD0iYm9sZCIgZm9udC1zaXplPSIyNCIgZmlsbD0iIzY2NiI+S0lOVEVYPC90ZXh0Pjwvc3ZnPg=='
  },
  { 
    name: 'Jeju Air', 
    // SVG data URI for Jeju Air (Orange text)
    url: 'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAxMjAgNDAiPjx0ZXh0IHg9IjUwJSIgeT0iNTAlIiBkb21pbmF0LWJhc2VsaW5lPSJtaWRkbGUiIHRleHQtYW5jaG9yPSJtaWRkbGUiIGZvbnQtZmFtaWx5PSJzYW5zLXNlcmlmIiBmb250LXdlaWdodD0iYm9sZCIgZm9udC1zaXplPSIyNCIgZmlsbD0iI0ZGNjYwMCI+amVqdUFpcjwvdGV4dD48L3N2Zz4='
  },
];

export const TEAM_SIZES = [
  '1-10명',
  '11-50명',
  '50명 이상',
  '100명 이상'
];

export const INTEREST_AREAS = [
  '솔루션 견적',
  '제안서 수신',
  '체험판 사용',
  '기타'
];
