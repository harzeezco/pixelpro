type MergeClassProps = string[];

export default function mergeClasses(...classNames: MergeClassProps) {
  return classNames.join(' ');
}
