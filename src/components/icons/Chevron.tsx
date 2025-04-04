export function Chevron({ rotated = false }: { rotated?: boolean }) {
  return (
    <svg
      width="32"
      height="32"
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      style={{
        transform: rotated ? "rotate(180deg)" : "",
      }}
    >
      <path
        d="M12.3906 10.276L18.1146 16L12.3906 21.724L14.276 23.6094L21.8853 16L14.276 8.39071L12.3906 10.276Z"
        fill="#062341"
      />
    </svg>
  );
}
