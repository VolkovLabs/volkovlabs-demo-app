import React, { FC } from 'react';
import { SVGProps } from '../types';

/**
 * Apache ECharts Panel
 */
export const ECharts: FC<SVGProps> = ({ size, fill, ...rest }) => {
  return (
    <a
      target="_blank"
      rel="noreferrer"
      href="https://volkovlabs.io/plugins/volkovlabs-echarts-panel/"
      title="Apache ECharts Panel"
    >
      <svg id="ECharts" width={size} height={size} viewBox="0 0 92 92" {...rest}>
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M45.865 91.728C71.1949 91.728 91.729 71.194 91.729 45.864C91.729 20.534 71.1949 0 45.865 0C20.535 0 0.000976562 20.534 0.000976562 45.864C0.000976562 71.194 20.535 91.728 45.865 91.728ZM45.8657 74.6621C61.7706 74.6621 74.664 61.7686 74.664 45.8637C74.664 29.9589 61.7706 17.0654 45.8657 17.0654C29.9608 17.0654 17.0674 29.9589 17.0674 45.8637C17.0674 61.7686 29.9608 74.6621 45.8657 74.6621Z"
          fill="#9D70F9"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M91.7251 45.864C91.7251 20.5344 71.1917 0.000672074 45.8623 0V17.0654C61.7669 17.0657 74.6601 29.959 74.6601 45.8637C74.6601 45.8638 74.6601 45.8639 74.6601 45.864L91.7251 45.864Z"
          fill="#FF5656"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M-0.000442505 45.8645C-0.000442505 45.8645 -0.000442505 45.8645 -0.000442505 45.8645C-0.000442505 71.1941 20.5329 91.7278 45.8623 91.7285V74.6631C29.9577 74.6628 17.0645 61.7695 17.0645 45.8648C17.0645 45.8647 17.0645 45.8646 17.0645 45.8645H-0.000442505Z"
          fill="#111111"
        />
      </svg>
    </a>
  );
};
