const Square = ({ width, height, ...rest }) => {
  return (
    <svg
      id="Слой_1"
      data-name="Слой 1"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 473.34 460.07"
      width={width}
      height={height}
      {...rest}
    >
      <g style={{ opacity: '0.75' }}>
        <path
          d="M478.51,21.38V478.23H21.66V21.38H478.51m1-1H20.66V479.23H479.51V20.38Z"
          transform="translate(-20.66 -20.38)"
        />
      </g>
      <g style={{ opacity: '0.25' }}>
        <path
          d="M480.38,21.25,21.53,480.1Z"
          transform="translate(-20.66 -20.38)"
          style={{
            fill: 'none',
            stroke: '#000',
            strokeLinecap: 'round',
            strokeMiterlimit: 10,
          }}
        />
        <path
          d="M480.38,21.25,21.53,480.1Z"
          transform="translate(-20.66 -20.38)"
        />
      </g>
      <rect
        x="215.08"
        y="215.09"
        width="29.55"
        height="29.55"
        style={{ fill: '#fff' }}
      />
      <text
        transform="translate(219.88 239.3)"
        style={{
          opacity: '0.5',
          fontSize: '34.76120376586914px',
          fontFamily: 'Georgia',
        }}
      >
        d
      </text>
      <rect
        x="443.79"
        y="216.22"
        width="29.55"
        height="29.55"
        style={{ fill: '#fff' }}
      />
      <text
        transform="translate(449.8 240.43)"
        style={{ fontSize: '34.76120376586914px', fontFamily: 'Georgia' }}
      >
        a
      </text>
    </svg>
  );
};

export default Square;
