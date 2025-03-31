import PropTypes from 'prop-types'
import Image from 'next/image'
import cn from 'classnames'
import { useConfig } from '@/lib/config'
import useTheme from '@/lib/theme'
import FormattedDate from '@/components/FormattedDate'
import TagItem from '@/components/TagItem'
import NotionRenderer from '@/components/NotionRenderer'
import TableOfContents from '@/components/TableOfContents'
import QRCode from 'react-qr-code'
import { useState, useEffect } from 'react'
import styles from '@/styles/SitesPost.module.css'

/**
 * A post renderer
 *
 * @param {PostProps} props
 *
 * @typedef {object} PostProps
 * @prop {object}   post       - Post metadata
 * @prop {object}   blockMap   - Post block data
 * @prop {string}   emailHash  - Author email hash (for Gravatar)
 * @prop {boolean} [fullWidth] - Whether in full-width mode
 */
export default function SitesPost (props) {
  const BLOG = useConfig()
  const { post, blockMap, emailHash, fullWidth = false } = props
  const { dark } = useTheme()

  // 链接状态相关状态
  const [linkStatus, setLinkStatus] = useState('testing') // 'testing', 'online', 'offline'
  const [linkSpeed, setLinkSpeed] = useState(null) // 毫秒
  const [isTestingLink, setIsTestingLink] = useState(true)

  // 测试链接可用性和速度
  useEffect(() => {
    if (!post.link || post.link === '#') {
      setLinkStatus('offline')
      setIsTestingLink(false)
      return
    }

    const testLink = async () => {
      const startTime = Date.now()
      let isCompleted = false

      // 设置超时
      const timeoutId = setTimeout(() => {
        if (!isCompleted) {
          isCompleted = true
          setLinkStatus('offline')
          setIsTestingLink(false)
        }
      }, 5000) // 5秒超时

      try {
        // 使用fetch API发送HEAD请求检测链接状态
        const response = await fetch(post.link, {
          method: 'HEAD',
          mode: 'no-cors' // 避免跨域问题
        })

        if (!isCompleted) {
          isCompleted = true
          clearTimeout(timeoutId)

          const endTime = Date.now()
          const duration = endTime - startTime

          setLinkSpeed(duration)
          setLinkStatus('online')
          setIsTestingLink(false)
        }
      } catch (error) {
        if (!isCompleted) {
          isCompleted = true
          clearTimeout(timeoutId)

          setLinkStatus('offline')
          setIsTestingLink(false)
        }
      }
    }

    testLink()

    // 清理函数
    return () => {
      setIsTestingLink(false)
    }
  }, [post.link])

  return (
    <article className={cn('flex flex-col', fullWidth ? 'md:px-24' : 'items-center')}>
      {/* 整合标题与网站信息区域 */}
      <div className={cn(styles.siteInfoContainer, { [styles.dark]: dark })}>
        <div className={cn(styles.siteMetaInfo, { 'max-w-2xl': !fullWidth })}>
          {post.type[0] !== 'Page' && (
            <div className={styles.siteMetaData}>
              <span className={styles.siteCollectionLabel}>收录于</span>
              <FormattedDate date={post.date} className={styles.siteDate} />
              {post.tags && (
                <div className={styles.siteTags}>
                  {post.tags.map(tag => (
                    <TagItem key={tag} tag={tag} />
                  ))}
                </div>
              )}
            </div>
          )}
        </div>
        <div className={styles.siteHeader}>
          <div className={styles.siteImageWrapper}>
            <Image
              src={post.cover ? "https://cdn.jsdelivr.net/gh/ChrisHyperFunc/static-storage@main" + post.cover : "https://cdn.jsdelivr.net/gh/ChrisHyperFunc/static-storage@main/img/default.png"}
              alt={post.title}
              layout="fill"
              objectFit="cover"
            />
          </div>
          <div className={styles.siteHeaderInfo}>
            <h1 className={styles.siteTitle}>
              <a href={post.link || '#'} target="_blank" rel="noopener noreferrer" className={styles.siteTitleLink}>
                {post.title}
              </a>
            </h1>
            <p className={styles.siteSummary}>{post.summary}</p>
          </div>
        </div>
        <div className={styles.siteContent}>
          <div className={styles.siteDescription}>
            <p className={styles.siteDescriptionText}>本站收录了 <a href={post.link || '#'} target="_blank" rel="noopener noreferrer" className={styles.siteHighlight}>{post.title}</a> 网站，为您提供便捷的访问方式。您可以通过链接直接访问该网站，或者使用手机扫描二维码在移动设备上打开。</p>

            {/* 链接状态指示器 - 苹果风格 */}
            <div className={cn(styles.linkStatusContainer, {
              [styles.linkStatusTesting]: linkStatus === 'testing',
              [styles.linkStatusOnline]: linkStatus === 'online',
              [styles.linkStatusOffline]: linkStatus === 'offline'
            })}>
              <div className={styles.linkStatusIndicator}></div>
              <div className={styles.linkStatusInfo}>
                <span className={styles.linkStatusText}>
                  {linkStatus === 'testing' && '正在测试链接...'}
                  {linkStatus === 'online' && '链接正常'}
                  {linkStatus === 'offline' && '链接异常'}
                </span>
                {linkStatus === 'online' && linkSpeed && (
                  <span className={styles.linkSpeedText}>{linkSpeed < 1000 ? '速度极快' : linkSpeed < 2000 ? '速度良好' : '速度一般'} ({linkSpeed}ms)</span>
                )}
              </div>
            </div>
          </div>
          <div className={styles.siteActions}>
            <div className={styles.qrCodeContainer}>
              <div className={styles.qrCodeWrapper}>
                <QRCode
                  value={post.link || '#'}
                  size={150}
                  level="H"
                  style={{ width: '100%', height: '100%' }}
                />
              </div>
              <p className={styles.qrCodeLabel}>扫描二维码访问</p>
            </div>
            <a href={post.link || '#'} target="_blank" rel="noopener noreferrer" className={styles.visitButton}>
              链接直达
              <span className={styles.visitButtonIcon}>→</span>
            </a>
          </div>
        </div>
      </div>

      {/* 教程内容 */}
      <div className={cn(styles.tutorialSection, { [styles.dark]: dark })}>
        <h2 className={styles.tutorialTitle}>使用教程与说明</h2>
        <div className="self-stretch flex flex-col items-center lg:flex-row lg:items-stretch">
          {!fullWidth && <div className="flex-1 hidden lg:block" />}
          <div className={fullWidth ? 'flex-1 pr-4' : 'flex-none w-full max-w-2xl px-4'}>
            <NotionRenderer recordMap={blockMap} fullPage={false} darkMode={dark} />
          </div>
          <div className={cn('order-first lg:order-[unset] w-full lg:w-auto max-w-2xl lg:max-w-[unset] lg:min-w-[160px]', fullWidth ? 'flex-none' : 'flex-1')}>
            {/* `65px` is the height of expanded nav */}
            <TableOfContents blockMap={blockMap} className="pt-3 sticky" style={{ top: '65px' }} />
          </div>
        </div>
      </div>
    </article>
  )
}

SitesPost.propTypes = {
  post: PropTypes.object.isRequired,
  blockMap: PropTypes.object.isRequired,
  emailHash: PropTypes.string.isRequired,
  fullWidth: PropTypes.bool
}
