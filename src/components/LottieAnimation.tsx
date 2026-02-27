import { DotLottieReact } from "@lottiefiles/dotlottie-react";

interface Props {
  src: string;
  loop?: boolean;
  autoplay?: boolean;
  className?: string;
}

export default function LottieAnimation({
  loop = true,
  autoplay = true,
  className,
  src,
}: Props) {
  return (
    <DotLottieReact
      src={src}
      loop={loop}
      autoplay={autoplay}
      className={className}
    />
  );
}
