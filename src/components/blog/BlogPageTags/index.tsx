// import styles from './style.module.css';

// import { api } from '@/api';
// import { Checkbox } from '@/shared';

// export const BlogPageTags = async ({ tagsParam }: { tagsParam: string | string[] | undefined }) => {
//   const data = await api.getBlogTagsPopulated();
//   return (
//     <div className={styles.blogPageTags}>
//       {data.map((tag) => (
//         <Checkbox
//           key={tag.id}
//           id={tag.id.toString()}
//           label={tag.title}
//           name="tags"
//           value={tag.title}
//           defaultChecked={tagsParam?.includes(tag.title)}
//         />
//       ))}
//     </div>
//   );
// };
